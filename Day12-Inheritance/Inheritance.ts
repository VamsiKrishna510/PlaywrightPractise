// Inheritance:
//A class can reuse the properties and methods of another class.  
// Inheritance is a mechanism where one class (child) can inherit the properties and methods of another class (parent).
// Inheritance allows you to reuse the functionality of an existing class without rewriting it.

// Method Overriding:
// A subclass/child calss can provide a specific implementation of a method that is already defined in its superclass.
// The method must have the same name, return type, and parameters.




//A ----properties + methods     (Parent class/ BaseClass/Super class)
//B extends A--- properties+methods ( Child class/ derived class/Sub class)

//Parent class

class Car
{
    name:string;
    color:string;
    model:number;

    constructor(name:string,color:string,model:number)
    {
        this.name=name;
        this.color=color;
        this.model=model;
    }

    start()
    {
        console.log("Car started");
    }
    stop()
    {
        console.log("Car stopped");
    }

    displayInformation()
    {
        console.log(`car name is ${this.name},color is ${this.color},model is ${this.model}`);
    }
}
//child class -Honda

class Honda extends Car
{
    year:number;
    constructor(name:string,color:string,model:number,year:number)
    {
        //invoke parent class constructor
        super(name,color,model);
        this.year=year;
    }   

    start()  //method overriding
    {
        console.log("Honda car started");
    }

    yom()
    {
        console.log(`name:${this.name}, color:${this.color}, model:${this.model}, year:${this.year}`);
    }
}
//Child class-Maruthi

class Maruthi extends Car
{
    year:number;
    constructor(Name:string,Color:string,model:number,year:number)
    {
        super(Name,Color,model);
        this.year=year;
    }
    start()
    {
        console.log("Maruthi car started"); 
    }
    Yom()
    {
        console.log(`name:${this.name}, color:${this.color}, model:${this.model}, year:${this.year}`);
    }
}

//Usage
//Creating honda object

let hondaCar= new Honda("Honda city",'Brown',2020,2026);
hondaCar.start(); //Honda car started  // called child class method( overrided)

hondaCar.stop();  //Car stopped //Parent class

hondaCar.displayInformation(); //car name is Honda city,color is Brown,model is 2020 // Parent class
hondaCar.yom(); //name:Honda city, color:Brown, model:2020, year:2026  // Child class


//Creating maruthi object
let maruthiCar=new Maruthi("Maruthi Swift",'White',2018,2023);
maruthiCar.start(); //Maruthi car started
maruthiCar.stop();  //Car stopped
maruthiCar.displayInformation(); //car name is Maruthi Swift,color is White,model is 2018
maruthiCar.Yom(); //name:Maruthi Swift, color:White, model:2018, year:2023


//Parent class variable is holding child class object

let car:Car=new Honda("Honda Amaze",'Black',2021,2027);

car.start(); //Honda car started
car.stop(); //Car stopped
car.displayInformation(); //car name is Honda Amaze,color is Black,model is 2021
//car.yom(); // Error: Property 'yom' does not exist on type 'Car'.
// The above line gives error because the parent class reference variable can access only the members of parent class
// even though it is holding the child class object.
//To access the child class specific members, we need to perform type casting

//Type casting
let hondaCar2=car as Honda;
hondaCar2.yom(); //name:Honda Amaze, color:Black, model:2021, year:2027