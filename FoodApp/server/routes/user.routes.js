const Users = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = app => {
    app.post("/api/register", Users.register);
    app.post("/api/login", Users.Login);
    app.get("/api/logout", Users.logout);
    app.get("/api/logreg", Users.checkLoggedIn);
    app.get("/api/user/:id", Users.getUser);

    app.post("/api/users/addmeal", Users.addMealToUser);
}