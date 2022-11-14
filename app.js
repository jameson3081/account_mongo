const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')//import model

const app = express()
const dbUri = 'mongodb+srv://serverhost2:serverhosttest@cluster0.rngoxff.mongodb.net/testDemo?retryWrites=true&w=majority'

mongoose.connect(dbUri)
    .then(result => {
        console.log('connected to cloud DB')

        app.listen(3000, err => {
            if(!err) console.log('listening to port 3000')
        })
        

    })
    .catch(error => {
        console.log('cant connect to cloud DB')
    })

//CREATE
app.get("/addUser", (req,res) => {
    //insert a document
    const u1 = new User({
        username: "test2",
        email: "test2@gmail.com",
        password: "test2"
    })
    u1.save()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send("cannot insert record")
        })
    




})

//READ
app.get("/user", (req,res) => {
    //READ a document
    User.find()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send("cannot insert record")
        })
})




//UPDATE
app.patch("/user", (req,res) => {
    //READ a document
    User.findByIdAndUpdate('6371faeea493584d9df4d097', {password: "test2updated"})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send("cannot update")
        })
})

//DELETE
app.delete("/user", (req,res) => {
    //delete a document
    User.findByIdAndDelete('')
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send("cannot delete")
        })
})
