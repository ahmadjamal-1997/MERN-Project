const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

require('./server/config/mongoose.config'); // This is new
require('dotenv').config();
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
app.use(cookieParser());
require('./server/routes/meal.routes')(app);
require('./server/routes/user.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
