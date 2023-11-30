const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDb = require('./db/db')

dotenv.config()

connectDb();
const app = express()

app.use(morgan('dev'))
app.use(express.json());
app.use(cors())


app.get('/',(req,res)=>{
    res.send("Yup API working perfectly!")
})
app.use('/users',require('./routers/userRoutes'))

//transection route
app.use('/transections', require('./routers/transRouters'))


const PORT = 4040;



//sever listen
app.listen(PORT,()=>{
    console.log(`Server running sucessfully ${PORT}`)
})