import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import postRoutes from './routes/post.route.js'
import cookieParser from 'cookie-parser';

dotenv.config();
//db connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{
        console.log(`DB Connected`)})
    .catch((err)=>{
        console.log(`DB Error ${err}`)})


const app = express();
//body parser
app.use(express.json());
//cookie parser
app.use(cookieParser());
//port
const port = 3000;

app.listen(port, ()=>{
    console.log(`server is up and running ${port}`);
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})