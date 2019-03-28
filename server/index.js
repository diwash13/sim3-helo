const express = require ('express')
const bodyParser = require ('body-parser')
const session = require('express-session')
const massive = require('massive')
const ctrl = require('./controllers/controller')
const pc = require ('./controllers/post_controller')
require('dotenv').config()

const app = express()
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 12312312333332
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log('Sweeettt'))
})

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
app.post('/auth/logout', ctrl.logout)

app.get('/api/current', ctrl.getUser)

app.get('/api/posts', pc.getPosts)
app.get('/api/post/:id', pc.getPost)