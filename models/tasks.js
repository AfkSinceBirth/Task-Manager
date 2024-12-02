const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength: [25, "name cannnot be more than 25 characters"],
    },
    completed: {
        type: Boolean,
        default:false
    },
});

module.exports = mongoose.model("Task",taskSchema);