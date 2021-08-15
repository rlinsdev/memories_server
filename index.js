import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/post.js';

const app = express();


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://jsMastery:jsMastery123@cluster0.jjvtx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORR || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
  .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);