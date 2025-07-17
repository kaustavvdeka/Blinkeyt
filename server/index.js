import express, { response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectDB.js';
import UserRouter from './route/user.route.js';

const app= express();
app.use(cors(
    {
        credentials: true,
        origin: process.env.FRONTEND_URL // Adjust this to your frontend's URL
    }
));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet({
    crossOriginResourcePolicy: false, // Adjust this based on your security needs
}));
const PORT=8080 || process.env.PORT


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the server'+PORT,
    })
});
app.use('/api/user', UserRouter);

connectDB().then(() => {
    console.log('Database connected successfully');
});
app.listen(PORT,()=>{
console.log('server is running on port', PORT);
})