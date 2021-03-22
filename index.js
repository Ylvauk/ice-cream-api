const express = require('express')
const app = express()
const cors = require('cors')
const iceCreamController = require('./controllers/IceCream')



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Controllers
app.use('/icecream', iceCreamController)

app.listen(3111, () => {
    console.log('Mm ice cream..')
})

