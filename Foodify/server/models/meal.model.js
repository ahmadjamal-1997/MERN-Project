const mongoose = require('mongoose');
const MealSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: [true, "Task should be Unique"],
        minlength: [3, "Title should be at least 3 characters"]
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
        min: [new Date(), "Date should be in the future"],
    },
    status: {
        type: String,
        default: "To Do",
    }

}, { timestamps: true });
module.exports.Meal = mongoose.model('Meal', MealSchema);
