import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRouter from './Routes/user.js'
import 'dotenv/config'
import videoRouter from './Routes/video.js'
import commentRouter from './Routes/comment.js'
import connectDB from './db/connect.js';

const app = express();

connectDB();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(cookieParser());

app.use('/api/user', userRouter);

app.use("/api/video", videoRouter);

app.use("/api/comment", commentRouter);

app.listen(process.env.PORT, () => {
    console.log("server listening on port 3000")
})