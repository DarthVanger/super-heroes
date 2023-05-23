const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.json())

const superheroes = []

app.post('/superheroes', (req, res) => {
    superheroes.push(req.body) 
    console.log(superheroes)
    res.json(req.body)
})
app.get('/superheroes', (req, res) => {
    res.json(superheroes)
})

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Listening on port ${port}`))
}

module.exports = app
