import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
// import { UserController } from './controllers/UserController';
import dotenv from 'dotenv';
import {connectDB} from './database/Connection'
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();
// app.use(express.json());
connectDB();

// useExpressServer(app, {
//   controllers: [UserController],
// });
useExpressServer(app, {
  controllers: [__dirname + '/controllers/*.ts'], 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});