import express from 'express'
import cars from 'cars'
import authRouter from './routes/authRouter.js'


const app = express()
app.use(cars())
app.use(express.json())
app.use('/auth',authRouter)

app.listen(process.env.PORT,() =>{
    console.log("server is runing")
})