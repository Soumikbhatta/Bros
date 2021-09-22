import express from 'express';
// import bodyParser from 'body-parser'; 
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();
dotenv.config();
    
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


//https://www.mongodb.com/cloud/atlas
app.use('/posts', postRoutes);
app.use("/user", userRouter);

app.get('/', (req, res) => {
    res.send('wassup! bros api here!');
})


// const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
    
    .then(() => app.listen(process.env.PORT || 5000, () => console.log(`server running on port: ${process.env.PORT || 5000}`)))
      
    .catch((error) => console.log(error.message));

  
mongoose.set('useFindAndModify', false);    