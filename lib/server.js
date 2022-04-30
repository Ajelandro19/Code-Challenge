const express = require("express");
const StudentController = require("./controller/Studentscontroller");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "VisualThinking Api welcome!"});
});

app.get("/havecertificate", (request, response) => {
    const studentscertified = StudentController.getStudentsCertified();
    response.json(studentscertified);
});
app.get("/students", (request, response) => {
    const students = StudentController.getStudents();
    response.json(students);
});
app.get("/creditsover500", (request, response) => {
    const goodstudents = StudentController.getgoodStudents();
    response.json(goodstudents);
});



app.listen(port, () => {
    console.log(`VisualThinking API in localhost:${port}`);
});

