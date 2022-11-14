const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    }
})

const Student = mongoose.model("student", studentSchema)//addtional 3rd argument "student" para walang "s" kung duplicate
module.exports = Student
