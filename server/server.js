import express from 'express'
require("dotenv").config();
import {readdirSync} from 'fs';
import cors from 'cors'
const morgan = require("morgan")
const app = express();
import mongoose from 'mongoose'


// db connection 
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
})
    .then(()=>{console.log('DB Connected');})
    .catch((err)=>{console.log("DB Connection error", err);})

// middlware
app.use(cors()); 
app.use(morgan("dev"))
app.use(express.json())

// in ordet to be able to see the json data that are sent from the front end to the backend 
// then we will have to do the bodyparser or work with express 



// router middleware
readdirSync('./routes').map((r)=>app.use('/api',require(`./routes/${r}`))) 

//creating a port in the environment file 
const port = process.env.PORT || 8000;
    

app.listen(port,()=> console.log(`Server is running in port ${port}`))