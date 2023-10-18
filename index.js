import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


import PostsRoutes from './routes/posts.js'

const app = express();
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/posts", PostsRoutes)

application.get("/", (req, res) => {res.send("Hello to API")})

// const CONNECTION_URL = 'mongodb+srv://Maria:Maria123@cluster0.y9los7j.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, ()=> console.log(`running on ${PORT}`))).catch((error)=> console.log(error.message))

// mongoose.set('useFindAndModify', false)