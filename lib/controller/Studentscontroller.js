const read =require("./../utils/read")
const studentservice=require("./../services/StudentService")

class StudentController{
    static getStudents(){
        const estudiantes=read.readJsonFile("visualpartners.json")
        return studentservice.getlistadealumnos(estudiantes)
    }
    static getStudentsCertified(){
        const estudiantes=read.readJsonFile("visualpartners.json")
        return studentservice.getalumnosconcertificado(estudiantes)
    }
    static getgoodStudents(){
        const estudiantes=read.readJsonFile("visualpartners.json")
        return studentservice.getalumnosprodigio(estudiantes)
    }
}

module.exports=StudentController