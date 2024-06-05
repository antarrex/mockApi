import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import mongoose from 'mongoose';
import 'dotenv/config';
import router from './router'

const app = express();
app.use(cors({
  credentials: true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/', router());

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

mongoose.Promise = Promise.resolve();
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));