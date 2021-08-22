import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();
    
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

//https://www.mongodb.com/cloud/atlas

const CONNECTION_URL ='mongodb+srv://soumik:soumik1712@cluster0.9ghrf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
    //if successfull connection
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    //if error  
    .catch((error) => console.log(error.message));

//makes sure no warnings in console    
mongoose.set('useFindAndModify', false);    