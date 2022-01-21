const mongoose = require('../db/connection');
const seedData = require('./seeds.json');
const IceCream = require('./models/IceCream');

IceCream.deleteMany({})
	.then(() => {
		IceCream.insertMany(seedData).then((iceCream) => {
			console.log('We have ice creams 😋😋😋');
			console.log(iceCream);
			process.exit();
		});
	})
	.catch((err) => console.error(err));
