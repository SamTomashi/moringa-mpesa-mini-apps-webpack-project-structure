import Car from './Car';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";

// document.getElementById("btn").addEventListener("click", function(){
//     const car = new Car("Peugeot", "3008", 2020);
//     const rabit = new Animal("Bunny", 6, "Female");
//     alert(rabit.getName());
//     alert(car.getYear());

// });

/**
    TDD Wokflow: Red, Green, Refactor
 */


/**
    OOP: Programming pardigm/a way based on the concept of objects
    class: blueprint. Universe, Solar system, planets, earth, 
    method: A function accessible from an class/object
    object: an instance of a class
    propperty: an attribute of a class/object
    constructor: A special funciton invoked everytime we create an instance of a class


    Principles:
    1. Inheritance: Is the ability of child class to inherit properties/methods of the parent class
    2. Encapsulation: Is the ability to protect class properties and methods from external
     modifcation, this is enforced by using access modifiers: public, private, protected
    3. Polymorphism: Many forms: it gives the ability to implement different functionalities in function
    4. Abstraction: Hidding the complexity of a class/object
 */

 const car = new Car()

 car.getModel()
