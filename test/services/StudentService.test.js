const studentservice = require("./../../lib/services/StudentService")

describe("Tests para Student Services.", ()=>{
    test("Requerimiento 1: Obtener lista de estudiantes con sus campos", ()=>{
        const alumnos= {name: "Ajelandro", id:"12121asd123" }
        const lista=studentservice.getlistadealumnos(alumnos)
        console.log(lista)
        expect(lista.length).toBe(1)
    })
})