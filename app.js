const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');
const app = express()
const PORT = process.env.PORT | 3000
const IP = '0.0.0.0'
const sendMail = require('./send-mail');
const DBURL = 'mongodb+srv://ElTorpedo:HelloWorld1@cluster0-sndxq.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("DATBASE CONNECTED!!!")
})

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ useNewUrlParser: true }))
app.set("view engine", "ejs")
    //routes
app.get('/', (req, res) => {
    res.render('index')
});
app.post('/new', (req, res) => {
    var newUser = User({
        name: req.body.name,
        collegeName: req.body.collegeName,
        email: req.body.email
    })
    newUser.save()
    sendMail(newUser)
    res.redirect('/finalpage')
});

app.get('/finalpage', (req, res) => {
    res.send("Check your mail for tickets")
})

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server running on port:' + PORT)
})