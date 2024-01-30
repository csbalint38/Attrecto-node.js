import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose'

const app = express();

app.use(cors({
    credentials: true,
}));
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

const server = http.createServer(app);

const MONGO_URL = 'mongodb+srv://balintcsefalvay:QX9rBS5QtJBuzVoD@cluster0.lnhgqyg.mongodb.net/';