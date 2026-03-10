import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';

import { env } from '../../../../apps/web/src/env';
import { db } from '@MyApp/db';
import { nextCookies } from 'better-auth/next-js';
import { username } from 'better-auth/plugins';

export const auth = betterAuth({
  baseURL: 'http://localhost:3000',
  trustedOrigins: ['http://localhost:3000'],
  database: prismaAdapter(db, {
    provider: 'postgresql', // or "sqlite" or "mysql"
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: env.BETTER_AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.BETTER_AUTH_GITHUB_CLIENT_SECRET,
      redirectUR: 'http://localhost:3000/api/auth/callback/github',
    },
  },
  plugins: [username(), nextCookies()], // add this
});

export type Session = typeof auth.$Infer.Session;
