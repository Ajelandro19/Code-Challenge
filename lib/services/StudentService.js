class StudentService{
    static getlistadealumnos(alumnos){
        return alumnos
    }
    static getalumnosconcertificado(alumnos){
        const certificado = alumnos.filter((alu) => alu.haveCertification === true)
        return certificado
    }
}
module.exports=StudentService