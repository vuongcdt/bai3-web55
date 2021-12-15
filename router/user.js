const express = require('express')
let userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.send('get method')
});

userRouter.post('/', (req, res) => {
    res.send('post method')
});
 
userRouter.patch('/', (req, res) => {
    res.send('patch method')
});

userRouter.put('/', (req, res) => {
    res.send('put method')
});

userRouter.delete('/', (req, res) => {
    res.send('delete method')
});

module.exports = userRouter