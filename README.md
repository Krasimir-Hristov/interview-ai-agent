# AI-Powered Interview Preparation Platform

A modern web application that helps users prepare for technical interviews through AI-powered mock interviews with voice interaction capabilities.

## Features

- **Interactive Voice Interviews**: Conduct realistic interview simulations with an AI interviewer using natural voice conversations
- **Multiple Interview Types**: Support for technical, behavioral, and mixed interview formats
- **Tech Stack Customization**: Choose from a wide range of technologies and frameworks for technical interviews
- **Real-time Feedback**: Get immediate feedback and assessments after each interview session
- **Interview History**: Track your progress with a comprehensive history of past interviews
- **Authentication**: Secure user authentication system with customizable profiles
- **Responsive Design**: Fully responsive interface that works across all devices

## Tech Stack

### Frontend

- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS
- Shadcn/UI Components

### Backend & APIs

- Firebase Authentication
- Firebase Cloud Firestore
- OpenAI GPT-4 for interview intelligence
- ElevenLabs for voice synthesis
- Deepgram for speech-to-text

### Development Tools

- ESLint
- Prettier
- Firebase Admin SDK

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd interwiew-prep
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=
OPENAI_API_KEY=
ELEVENLABS_API_KEY=
DEEPGRAM_API_KEY=
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features in Detail

### AI Interviewer

- Natural language processing for dynamic conversations
- Voice synthesis for realistic interview experience
- Real-time speech recognition
- Context-aware follow-up questions

### Interview Types

- Technical interviews with language/framework-specific questions
- Behavioral interviews focusing on soft skills
- Mixed format interviews combining both aspects

### User Dashboard

- Track interview history
- View detailed feedback and assessments
- Monitor progress over time
- Customize interview preferences

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for GPT-4 API
- ElevenLabs for voice synthesis
- Deepgram for speech recognition
- Firebase for backend services
- Vercel for hosting and deployment
