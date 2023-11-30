const mongoose = require('mongoose')
const colors= require('colors')

const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.mongoUrl)
        console.log(`MongoDb connected Succesfully`)
    } catch (error) {
        console.log(`${error}`.bgRed)
    }
}
module.exports = connectDb