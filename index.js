// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const iceCreamController = require('./controllers/IceCream');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (req, res) => {
	res.redirect('/icecreams');
});

// Controllers
// Forward all requests to localhost:3111/icecreams to the ice cream controller
app.use('/icecreams', iceCreamController);

app.listen(3111, () => {
	console.log('Mmm ice cream...🍦🍦🍦');
});
