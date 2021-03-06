const express = require('express');
const cors = require('cors');
const app = express();

const cookieParser = require('cookie-parser');

require('./config/mongoose.config'); // This is new

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
app.use(cookieParser());

require('./routes/meal.routes')(app);
require('./routes/user.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
