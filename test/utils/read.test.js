const read = require("./../../lib/utils/read")

describe("Tests para read utils.", ()=>{
    test("Requerimiento 1: Obtener el nombre de un parter", ()=>{
        const alumnos= read.readJsonFile("partnerstest.json")
        const name=alumnos[0].name
        expect(name).toBe("Warren")
    })
})