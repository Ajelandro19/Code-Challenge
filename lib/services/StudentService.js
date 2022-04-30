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
    static getemailconcertificado(alumnos){
        const certificados=StudentService.getalumnosconcertificado(alumnos)
        return certificados.map((al) => al.email);
    
    }
}
module.exports=StudentService