const mongoose = require('mongoose');
const MealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Meal name is required"],
        minlength: [3, "Meal name should be 3 characters at least"]
    },
    desc: {
        type: String,
        required: [true, "Description is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be greater than zero"]
    }

}, { timestamps: true });
module.exports.Meal = mongoose.model('Meal', MealSchema);
