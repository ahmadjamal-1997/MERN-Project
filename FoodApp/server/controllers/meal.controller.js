const { Meal } = require('../models/meal.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// The method below is new
module.exports.createMeal = (request, response) => {
    const { name, desc, price } = request.body;
    Meal.create({
        name,
        desc,
        price,
    })
        .then(meal => response.json(meal))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllMeals = (request, response) => {
    Meal.find({})
        .then(meals => response.json(meals))
        .catch(err => response.json(err))
}

module.exports.getMeal = (request, response) => {
    Meal.findOne({ _id: request.params.id })
        .then(meal => response.json(meal))
        .catch(err => response.json(err))
}

module.exports.updateMeal = (request, response) => {
    Meal.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedMeal => response.json(updatedMeal))
        .catch(err => response.json(err))
}

module.exports.deleteMeal = (request, response) => {
    Meal.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.addUserToMeal = (mealId, user) => {
    Meal.findByIdAndUpdate(
        mealId,
        { $push: { users: user._id } },
        { new: true, useFindAndModify: false }
    )
};


