const mongoose = require('../connection')
const Schema = mongoose.Schema


const IceCreamSchema = new Schema(
    {
        flavor: String,
        varieties: Number,
        delicious: Boolean
    }
)

const IceCream = mongoose.model("IceCream", IceCreamSchema)

module.exports = IceCream