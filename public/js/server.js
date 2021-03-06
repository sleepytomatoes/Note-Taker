// Dependencies

const express = require('express');

// Express Config

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Port

var PORT = process.env.PORT || 3001;

// Router

require("./api_route.js")(app);
require("./html_route.js")(app);

// Listener 

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));