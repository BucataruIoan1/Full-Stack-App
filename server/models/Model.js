import mongoose from "mongoose";

const Employee = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Employees', Employee);