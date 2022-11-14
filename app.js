const express = require('express')
const mongoose = require('mongoose')
const Student = require('./models/student')//import model

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
app.get("/addStudent", (req,res) => {
    //insert a document
    const s1 = new Student({
        name: "Juancho Gomez",
        section: "3ISB"
    })
    s1.save()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send("cannot insert record")
        })
    




})
//CREATE 2
app.use(express.json())
app.post('/student' , (req,res) => {
    const s2 = new Student(req.body)
    s2.save()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            throw err

        } )

})

//READ
app.get("/student", (req,res) => {
    //READ a document
    Student.findById('636ee7de5f296801bd74151a')
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send("cannot insert record")
        })
})

app.get("/student/:id", (req,res) => {
    //READ a document
    Student.findById(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send("cannot insert record")
        })
})


//UPDATE
app.patch("/student", (req,res) => {
    //READ a document
    Student.findByIdAndUpdate('636ee7de5f296801bd74151a', {name: "Juan Gomez"})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send("cannot update")
        })
})

//DELETE
app.delete("/student", (req,res) => {
    //delete a document
    Student.findByIdAndDelete('636eed07c8d3d62c5ed6258e')
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send("cannot delete")
        })
})
