//super() - used to invoke immediate parent class constructor
//super - used to invoke immediate parent class method

//super - cannot be used to invoke the parent class proprty. (In Java, it is possible)

class Parent
{
    num:number=10;
    constructor()
    {
        console.log("Parent class constructor");
    }
    display()
    {
        console.log("Parent class method");
    }
}
class child extends Parent
{
    num:number=20;//overridden
    constructor()
    {
        super();//invoking parent class constructor
        console.log("Child class constructor");
    }   
    show()
    {
        super.display();//invoking parent class method
        console.log("Child class method");
        console.log(`child num:${this.num}`);
        //console.log(`parent num:${super.num}`);//Error: 'super' can only be referenced in members of derived classes or object literal expressions.
    }
    //overriden method
    display(): void {
        console.log("Child class overridden method");

        super.display();//invoking parent class method
    }
}

let c1=new child();
c1.show();
c1.display();   