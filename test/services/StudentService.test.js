const studentservice = require("./../../lib/services/StudentService")

describe("Tests para Student Services.", ()=>{
    test("Requerimiento 1: Obtener numero de estudiantes de una lista", ()=>{
        const alumnos= [{name: "Ajelandro", id:"12121asd123" },{name: "Alex", id:"121dsad32132" }]
        const lista=studentservice.getlistadealumnos(alumnos)
        expect(lista.length).toBe(2)
    })
    test("Requerimiento 2: Obtener lista de estudiantes con certificado", ()=>{
        const alumnos= [{name: "Ajelandro", id:"12121asd123", haveCertification: true },{name: "Alex", id:"121dsad32132", haveCertification: false }]
        const lista=studentservice.getalumnosconcertificado(alumnos)
        expect(lista.length).toBe(1)
    })
    test("Requerimiento 3: Obtener lista de estudiantes con más de 500 créditos", ()=>{
        const alumnos= [{name: "Ajelandro", credits: 508, haveCertification: true },{name: "Alex", haveCertification: false, credits: 400 },{name: "Ariel", haveCertification: false, credits: 700 }]
        const lista=studentservice.getalumnosprodigio(alumnos)
        expect(lista.length).toBe(2)
    })
    test("Requerimiento 4: Obtener email de estudiantes con certificado", ()=>{
        const alumnos= [{name: "Ajelandro", id:"12121asd123", haveCertification: true, email: "alex@alumno.mx" },{name: "Alex", id:"121dsad32132", haveCertification: false, email: "lala@alumno.mx" }]
        const lista=studentservice.getemailconcertificado(alumnos)
        expect(lista).toBe("alex@alumno.mx")
    })
})