const studentservice = require("./../../lib/services/StudentService")

describe("Tests para Student Services.", ()=>{
    test("Requerimiento 1: Obtener numero de estudiantes de una lista", ()=>{
        const alumnos= [{name: "Ajelandro", id:"12121asd123" },{name: "Alex", id:"121dsad32132" }]
        const lista=studentservice.getlistadealumnos(alumnos)
        expect(lista.length).toBe(2)
    })
})