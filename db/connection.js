const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/icecream', { useNewUrlParser: true, useFindAndModify: false })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})


module.exports = mongoose