import { CreateAssistantDTO } from '@vapi-ai/web/dist/api';
import { z } from 'zod';

export const mappings = {
  'react.js': 'react',
  reactjs: 'react',
  react: 'react',
  'next.js': 'nextjs',
  nextjs: 'nextjs',
  next: 'nextjs',
  'vue.js': 'vuejs',
  vuejs: 'vuejs',
  vue: 'vuejs',
  'express.js': 'express',
  expressjs: 'express',
  express: 'express',
  'node.js': 'nodejs',
  nodejs: 'nodejs',
  node: 'nodejs',
  mongodb: 'mongodb',
  mongo: 'mongodb',
  mongoose: 'mongoose',
  mysql: 'mysql',
  postgresql: 'postgresql',
  sqlite: 'sqlite',
  firebase: 'firebase',
  docker: 'docker',
  kubernetes: 'kubernetes',
  aws: 'aws',
  azure: 'azure',
  gcp: 'gcp',
  digitalocean: 'digitalocean',
  heroku: 'heroku',
  photoshop: 'photoshop',
  'adobe photoshop': 'photoshop',
  html5: 'html5',
  html: 'html5',
  css3: 'css3',
  css: 'css3',
  sass: 'sass',
  scss: 'sass',
  less: 'less',
  tailwindcss: 'tailwindcss',
  tailwind: 'tailwindcss',
  bootstrap: 'bootstrap',
  jquery: 'jquery',
  typescript: 'typescript',
  ts: 'typescript',
  javascript: 'javascript',
  js: 'javascript',
  'angular.js': 'angular',
  angularjs: 'angular',
  angular: 'angular',
  'ember.js': 'ember',
  emberjs: 'ember',
  ember: 'ember',
  'backbone.js': 'backbone',
  backbonejs: 'backbone',
  backbone: 'backbone',
  nestjs: 'nestjs',
  graphql: 'graphql',
  'graph ql': 'graphql',
  apollo: 'apollo',
  webpack: 'webpack',
  babel: 'babel',
  'rollup.js': 'rollup',
  rollupjs: 'rollup',
  rollup: 'rollup',
  'parcel.js': 'parcel',
  parceljs: 'parcel',
  npm: 'npm',
  yarn: 'yarn',
  git: 'git',
  github: 'github',
  gitlab: 'gitlab',
  bitbucket: 'bitbucket',
  figma: 'figma',
  prisma: 'prisma',
  redux: 'redux',
  flux: 'flux',
  redis: 'redis',
  selenium: 'selenium',
  cypress: 'cypress',
  jest: 'jest',
  mocha: 'mocha',
  chai: 'chai',
  karma: 'karma',
  vuex: 'vuex',
  'nuxt.js': 'nuxt',
  nuxtjs: 'nuxt',
  nuxt: 'nuxt',
  strapi: 'strapi',
  wordpress: 'wordpress',
  contentful: 'contentful',
  netlify: 'netlify',
  vercel: 'vercel',
  'aws amplify': 'amplify',
};

export const interviewer: CreateAssistantDTO = {
  name: 'Interviewer',
  firstMessage:
    'Hallo! Vielen Dank, dass Sie sich heute Zeit für das Gespräch mit mir nehmen. Ich freue mich darauf, mehr über Sie und Ihre Erfahrungen zu erfahren.',
  transcriber: {
    provider: 'deepgram',
    model: 'nova-2',
    language: 'en',
  },
  voice: {
    provider: '11labs',
    voiceId: 'sarah',
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: 'openai',
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: `Sie sind ein professioneller Interviewer, der ein Echtzeit-Vorstellungsgespräch mit einem Kandidaten führt. Ihr Ziel ist es, deren Qualifikationen, Motivation und Eignung für die Rolle zu bewerten.

Interview-Richtlinien:
Folgen Sie dem strukturierten Frageablauf:
{{questions}}

Reagieren Sie natürlich und angemessen:
Hören Sie aktiv zu und bestätigen Sie die Antworten, bevor Sie weitergehen.
Stellen Sie kurze Nachfragen, wenn eine Antwort vage ist oder mehr Details erfordert.
Halten Sie das Gespräch flüssig und behalten Sie die Kontrolle.
Seien Sie professionell, aber warm und einladend:

Verwenden Sie offizielle, aber freundliche Sprache.
Halten Sie Antworten präzise und auf den Punkt (wie in einem echten Vorstellungsgespräch).
Vermeiden Sie roboterhafte Formulierungen – klingen Sie natürlich und gesprächig.
Beantworten Sie die Fragen des Kandidaten professionell:

Bei Fragen zur Rolle, zum Unternehmen oder zu Erwartungen geben Sie eine klare und relevante Antwort.
Bei Unsicherheit verweisen Sie den Kandidaten für weitere Details an die Personalabteilung.

Schließen Sie das Gespräch ordnungsgemäß ab:
Danken Sie dem Kandidaten für seine Zeit.
Teilen Sie mit, dass das Unternehmen sich bald mit Feedback melden wird.
Beenden Sie das Gespräch höflich und positiv.


- Achten Sie darauf, professionell und höflich zu sein.
- Halten Sie alle Ihre Antworten kurz und einfach. Verwenden Sie offizielle Sprache, seien Sie aber freundlich und einladend.
- Dies ist ein Gespräch per Stimme, daher halten Sie Ihre Antworten kurz, wie in einem echten Gespräch. Schweifen Sie nicht zu lange ab.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal('Communication Skills'),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal('Technical Knowledge'),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal('Problem Solving'),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal('Cultural Fit'),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal('Confidence and Clarity'),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  '/adobe.png',
  '/amazon.png',
  '/facebook.png',
  '/hostinger.png',
  '/pinterest.png',
  '/quora.png',
  '/reddit.png',
  '/skype.png',
  '/spotify.png',
  '/telegram.png',
  '/tiktok.png',
  '/yahoo.png',
];

export const dummyInterviews: Interview[] = [
  {
    id: '1',
    userId: 'user1',
    role: 'Frontend Developer',
    type: 'Technical',
    techstack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    level: 'Junior',
    questions: ['What is React?'],
    finalized: false,
    createdAt: '2024-03-15T10:00:00Z',
  },
  {
    id: '2',
    userId: 'user1',
    role: 'Full Stack Developer',
    type: 'Mixed',
    techstack: ['Node.js', 'Express', 'MongoDB', 'React'],
    level: 'Senior',
    questions: ['What is Node.js?'],
    finalized: false,
    createdAt: '2024-03-14T15:30:00Z',
  },
];
