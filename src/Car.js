export default class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getModel(){
        return this.model;
    }

    getYear(){
       return this.year
    }
}