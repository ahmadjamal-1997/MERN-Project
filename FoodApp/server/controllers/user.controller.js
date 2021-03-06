const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.register = (req, res) => {
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, "SECRET_KEY");

            res
                .cookie("usertoken", userToken, "SECRET_KEY", {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user });
        })
        .catch(err => res.status(400).json(err));
}

module.exports.Login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }

    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if (!correctPassword) {
        // password wasn't a match!
        return res.sendStatus(400);
    }

    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, "SECRET_KEY");

    // note that the response object allows chained calls to cookie and json
    res
        .cookie("usertoken", userToken, "SECRET_KEY", {
            httpOnly: true
        })
        .json({ msg: "success!" });
}
module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

module.exports.checkLoggedIn = (req, res) => {
    if ("usertoken" in req.cookies) {
        const {id} = jwt.verify(req.cookies.usertoken, 'SECRET_KEY');
        res.json({
            loggedInStatus: true,
            userId: id
        });
    } else {
        res.json({ loggedInStatus: false });
    }
};

module.exports.getUser = (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(user => response.json(user))
        .catch(err => response.json(err))
}

module.exports.addMealToUser = (userId, meal) => {
    User.findByIdAndUpdate(
        userId,
        { $push: { meals: meal._id } },
        { new: true, useFindAndModify: false }
    )
};

