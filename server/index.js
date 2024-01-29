import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
//db connection
mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(`DB Connected`)})
.catch((err)=>{
    console.log(`DB Error ${err}`)})


const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`server is up and running ${port}`);
})