/*
1. Class
2. Read only Properties
3. Optional property


4. Static properties and methods
    // 1) static properties/methods are common/shared across all the objects
   // 2) static properties/methods can be accessed through class name directly
    // 3) static properties /methods can be modified using class
    //4) we cannot use 'this' for static properties , instead we can use class name.

*/

class Student
{
    readonly studentId:number;// Read-only property (can only be assigned once, inside constructor)
    studentName:string;//regular property
    studentEmailId?:string;//OptionalProperty (can be undefined)
    static schoolName:string

constructor(id:number,name:string,emailId?:string)
{
    this.studentId=id;
    this.studentName=name;
    this.studentEmailId=emailId;
}
//Method todisplay student information (Named function )

displayInfo():void
{
    console.log("Student ID:",this.studentId);
    console.log("Student name:",this.studentName);
    if(this.studentEmailId)
    {
        console.log("email is:",this.studentEmailId)
    }
    else
    {
        console.log("Email is not provided")
    }
    // Access static property using class name
    console.log("School name",Student.schoolName)
}

//  Method to display student information(Anonymous method using arrow function syntax)

    DisplayInfo1=()=>

        {
            console.log("Student ID",this.studentId)
            console.log("Student name :",this.studentName)

            if(this.studentEmailId)
            {
                console.log("Email id is ",this.studentEmailId)
            }
            else
            {
                console.log("Emails is not available")
            
            }
            console.log("School name :",Student.schoolName)
        }

        // Static method to change the school name
  static changeSchoolName(newName: string): void
   {
    Student.schoolName = newName;
  }
}

// Creating Student objects
const s1 = new Student(101, "John");
const s2 = new Student(102, "Bob", "bob@gmail.com");

// Display initial student information
console.log("Initial student info:");
s1.displayInfo();
s2.displayInfo();

// Try to change read-only property 
// s1.studentId = 999; // Error: Cannot assign to 'studentId' because it is a read-only property.

// Change the static school name
Student.changeSchoolName("Sunrise Academy");

// Display updated student information after school name change
console.log("After changing the school name:");
s1.displayInfo();
s2.displayInfo();


