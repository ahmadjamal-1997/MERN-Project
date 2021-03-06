const mealController = require('../controllers/meal.controller');
module.exports = function (app) {
    app.get('/api', mealController.index);
    app.post('/api/meals/new', mealController.createMeal);
    app.get('/api/meals', mealController.getAllMeals);
    app.get('/api/meals/:id', mealController.getMeal);
    app.put('/api/meals/:id', mealController.updateMeal);
    app.delete('/api/meals/:id', mealController.deleteMeal);

    app.post('/api/meals/adduser', mealController.addUserToMeal);



}
