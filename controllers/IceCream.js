const express = require('express')
const IceCream = require('../db/models/IceCream')

const router = express.Router()


router.get('/', (req, res) => {
    IceCream.find({}).then(cone => {
        res.json(cone)
    })
})

router.get('/:id', (req, res) => {
    IceCream.findById({ _id: req.params.id }).then(cone => {
        res.json(cone)
    })
})

router.get('/names/:flavor', (req, res) => {
    IceCream.findOne({ flavor: req.params.flavor }).then(cone => {
        res.json(cone)
    })
})

router.post('/', (req, res) => {
    IceCream.create(req.body).then((cone) => {
        res.json(cone)
    })
})

router.put('/:id', (req, res) => {
    IceCream.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(cone => {
            res.json(cone)
        })
})

router.delete('/:id', (req, res) => {
    IceCream.findByIdAndDelete({ _id: req.params.id }).then((delCone) => {
        res.json(delCone)
    })
})

module.exports = router;