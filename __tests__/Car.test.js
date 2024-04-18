import Car from "../src/Car";

// describe("Car", () => {
//     const car = new Car("Toyota", "GXR", 2020)

//     test(`Expected getModel() to return a string but found ${typeof car.getModel()}`, ()=>{
//         expect(typeof car.getModel()).toBe("string")
//     })

//     test(`Givent const car = new Car("Toyota", "GXR", 2020)
//         we expect getModel() to return 'GXR' but found ${car.getModel()}
//     `, ()=> {
//         // expect(car.getModel()).toEqual('GXR')
//         expect(car.model).toEqual(car.getModel())
//     })

//     test("It should return a value of type number", ()=>{
//         expect(typeof car.getYear()).toBe("number")
//     })


// })


describe("Car", function(){

    let car;

    beforeEach(() => {
        car = new Car("Toyota", "GXR", 2020)
    });

    test("It should return a string", ()=>{
        expect(car.getModel).toBeInstanceOf(Function)
    })

    test("It should return a property of Car", ()=>{
        expect(car.getModel()).toBe(car.model)
    })

     test("It should return a property of Car", ()=>{
        expect(Car.prototype.getModel).toBeDefined();
    })


})
