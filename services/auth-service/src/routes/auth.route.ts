import { Router } from 'express';
import { validateRequest } from "common";
import { loginHandler, registerHandler } from '@/controllers/auth.controller';
import { loginSchema, refreshSchema, registerSchema, revokeSchema } from './auth.schema';

export const authRouter: Router = Router();

authRouter.post('/register', validateRequest({ body: registerSchema.shape.body }), registerHandler);
authRouter.post('/login', validateRequest({ body: loginSchema.shape.body }), loginHandler);