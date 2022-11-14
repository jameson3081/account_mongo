const express = require('express')
const mongoose = require('mongoose')
const Account = require('./models/account')//import model

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
app.get("/addAccount", (req,res) => {
    //insert a document
    const u1 = new Account({
        username: "test",
        email: "test@gmail.com",
        password: "test"
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
app.get("/account", (req,res) => {
    //READ a document
    Account.find()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send("cannot insert record")
        })
})




//UPDATE
app.patch("/account", (req,res) => {
    //READ a document
    Account.findByIdAndUpdate('637206586e1e2f359edaa06b', {password: "test2updated"})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send("cannot update")
        })
})

//DELETE
app.delete("/account", (req,res) => {
    //delete a document
    Account.findByIdAndDelete('637206506e1e2f359edaa069')
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send("cannot delete")
        })
})
