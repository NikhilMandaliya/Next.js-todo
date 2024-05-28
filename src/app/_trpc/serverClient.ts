import { httpBatchLink } from '@trpc/client';

import { appRouter } from '@/server';
import { createCallerFactory } from '@/server/trpc';

const createCaller = createCallerFactory(appRouter);

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
});
