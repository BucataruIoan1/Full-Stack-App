import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Route from "./routes/Route.js"

const app = express();
mongoose.connect('mongodb://localhost:27017/employeeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Check if the connection is successful
const db = mongoose.connection;
db.on('error', (err) => {
    console.log(err);
});
db.once('open', () => {
    console.log('Succesfully connected database')
})

app.use(cors());
app.use(express.json());
app.use(Route);

app.listen(5001, () => {
    console.log('Server is running on port 5001')
})