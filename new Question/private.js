class Test {
    #variable1 = "private_variable"
    variable2 = "public_variable"

    func1 () {
        console.log("func1")
        this.#func2()
    }
    #func2 () {
        console.log("func2")
    }
    getVariable1() {
        return this.#variable1
    }
}
let obj = new Test()
obj.func1()
// obj.#func2()
console.log(obj.variable2)
// console.log(obj.#variable1)
console.log(obj.getVariable1())