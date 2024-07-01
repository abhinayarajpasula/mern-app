const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', async(req, res) => {
    try {
        const students = await Student.find(); //it will fetch all the students from the database
        res.json(students); //it will send the students to the frontend

    } catch (error) {   
        res.status(500).send("Server error");

    }
})

router.post("/", async(req, res) => {
    const {name, age, course} = req.body;//it will get the data from the frontend
    try {
        const newStudent = new Student({
            name,
            age,
            course
        })
        const student = await newStudent.save();
        res.json(student);//send the saved student as the JSON resonse
    } catch (error) {
        res.status(500).send("Server error");
    }
})

module.exports = router;