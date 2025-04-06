import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

useExpressServer(app, {
  controllers: [UserController],
});

export default app;
