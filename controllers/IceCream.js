const express = require('express');
const IceCream = require('../db/models/IceCream');

const router = express.Router();

// Index: Get all ice creams
// http://localhost:3111/icecreams/
router.get('/', (req, res) => {
	IceCream.find({}).then((cone) => {
		res.json(cone);
	});
});

// Show: Get one ice cream by id
// http://localhost:3111/icecreams/id
router.get('/:id', (req, res) => {
	IceCream.findById({ _id: req.params.id }).then((cone) => {
		res.json(cone);
	});
});

// Show: Get one ice cream by flavor
// http://localhost:3111/icecreams/flavors/flavor
router.get('/flavors/:flavor', (req, res) => {
	IceCream.findOne({ flavor: req.params.flavor }).then((cone) => {
		res.json(cone);
	});
});

// Create: Add an ice cream
// http://localhost:3111/icecreams/
router.post('/', (req, res) => {
	IceCream.create(req.body).then((cone) => {
		res.status(201).json(cone);
	});
});

// Update: Edit an ice cream by id
// http://localhost:3111/icecreams/id
router.put('/:id', (req, res) => {
	IceCream.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then((cone) => {
		res.json(cone);
	});
});

// Delete: Remove an ice cream by id
// http://localhost:3111/icecreams/id
router.delete('/:id', (req, res) => {
	IceCream.findByIdAndDelete({ _id: req.params.id }).then((delCone) => {
		res.json(delCone);
	});
});

module.exports = router;
