import {Router} from "express";

const router = Router()

router.get('/login', (req, res) => {
    res.send('login')
})

router.post('/register', (req, res) => {
    res.send('register')
})

export {
    router
}