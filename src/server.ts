import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';
import dotenv from 'dotenv';
import {connectDB} from './database/Connection'
connectDB();
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();
app.use(express.json());

useExpressServer(app, {
  controllers: [UserController],
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});