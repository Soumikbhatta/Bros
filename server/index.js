import express from 'express';
// import bodyParser from 'body-parser'; 
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();
    
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


//https://www.mongodb.com/cloud/atlas
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('wassup bros api');
})


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
    //if successfull connection
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    //if error  
    .catch((error) => console.log(error.message));

//makes sure no warnings in console    
mongoose.set('useFindAndModify', false);    