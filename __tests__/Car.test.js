import Car from "../src/Car";

describe("Car", () => {
    const car = new Car("Toyota", "GXR", 2020)

    test("The method getModel should return a value of type string", ()=>{
        expect(typeof car.getModel()).toBe("string")
    })

    test("It should return a value of type number", ()=>{
        expect(typeof car.getYear()).toBe("number")
    })

    test("It should return a value equal to the model", ()=> {
        expect(car.getModel()).toEqual('GXR')
    })
})
