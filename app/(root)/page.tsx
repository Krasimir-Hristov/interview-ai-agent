import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import InterviewCard from '@/components/InterviewCard';
import { getCurrentUser } from '@/lib/actions/auth.action';
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from '@/lib/actions/general.action';

const Page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Werde interviewbereit mit KI-gestützter Übung & Feedback</h2>
          <p className='text-lg'>
            Übe mit echten Interviewfragen & erhalte sofortiges Feedback
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>Interview starten</Link>
          </Button>
        </div>

        <Image
          src='/robot.png'
          alt='robot'
          width={400}
          height={400}
          className='max-sm:hidden'
        />
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Deine Interviews</h2>

        <div className='interviews-section'>
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>Sie haben noch keine Interviews durchgeführt</p>
          )}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Ein Interview durchführen</h2>

        <div className='interviews-section'>
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>Es sind keine neuen Interviews verfügbar</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
