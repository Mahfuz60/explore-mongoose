import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

// Application Routes
import userRoutes from './app/modules/user/user.route';

//using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route

app.use('/api/v1/user', userRoutes);

app.use('/api/v1/create-user', userRoutes);

export default app;
