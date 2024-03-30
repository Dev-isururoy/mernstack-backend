const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');

app.use(cors()); 
app.use(express.json());


const uri = 'mongodb+srv://isururoy:21ccb8cd@cluster0.b61a4ga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('MongoDB Error');
    }
}; 

connect();

const server = app.listen(3001, '127.0.0.1', () => {
    console.log(`nord server is listening to ${server.address().port}`);
});
