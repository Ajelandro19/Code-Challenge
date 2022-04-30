class StudentService{
    static getlistadealumnos(alumnos){
        return alumnos
    }
    static getalumnosconcertificado(alumnos){
        const certificado = alumnos.filter((alu) => alu.haveCertification === true)
        return certificado
    }
    static getalumnosprodigio(alumnos){
        const lista = alumnos.filter((alu) => alu.credits > 500)
        return lista
    }
}
module.exports=StudentService