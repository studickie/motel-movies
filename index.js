const path = require('path')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, './views'))

app.get('/', (req, res) => {
    res.render('index')
})

mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB')
    app.listen(3000)
})