import express, {Request, Response, NextFunction} from 'express'
import {router as userRouter} from "./users/users.js";

const port = 8000
const app = express()

//middleware
const middleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('Date now', Date.now())
    res.send('Date now')
    next()
}
app.use('/date-now', middleware)

app.get('/hello', (req, res) => {
    res.send('Привет!')
})
// redirect
app.get('/redirect', (req, res) => {
    res.redirect(301, 'https://google.com')
})

app.use('/users', userRouter)


const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message)
    res.status(401).send(err.message)
}
app.get('/error-login', (req, res) => {
    throw new Error('Unauthorized')
})
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Порт запущен на ${port} порту`)
})