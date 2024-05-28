import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const createCallerFactory = t.createCallerFactory;
export const router = t.router;
export const publicProcedure = t.procedure;
