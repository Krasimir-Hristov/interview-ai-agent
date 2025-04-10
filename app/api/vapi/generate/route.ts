import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { getRandomInterviewCover } from '@/lib/utils';
import { db } from '@/firebase/admin';

export async function GET() {
  return Response.json(
    { success: true, message: 'Thank you!' },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google('gemini-2.0-flash-001'),
      prompt: `Bereite Fragen für ein Vorstellungsgespräch vor.
      Die Berufsrolle ist ${role}.
      Die Berufserfahrungsstufe ist ${level}.
      Der im Job verwendete Tech-Stack ist: ${techstack}.
      Der Fokus zwischen Verhaltens- und technischen Fragen sollte tendieren zu: ${type}.
      Die benötigte Anzahl an Fragen ist: ${amount}.
      Bitte gib nur die Fragen zurück, ohne zusätzlichen Text.
      Die Fragen werden von einem Sprachassistenten vorgelesen, daher verwende keine "/" oder "*" oder andere Sonderzeichen, die den Sprachassistenten stören könnten.
      Gib die Fragen in diesem Format zurück:
      ["Frage 1", "Frage 2", "Frage 3"]
      
      Vielen Dank! <3
    `,
    });

    const interview = {
      role,
      level,
      type,
      techstack: techstack.split(','),
      questions: JSON.parse(questions),
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection('interviews').add(interview);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);

    return Response.json({ success: false, error }, { status: 500 });
  }
}
