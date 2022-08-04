let cl = console.log;

/* Constructor function */
function CreateEmp (empName, empId, empEmail){
    //this ={}
    this.name = empName;
    this.id = empId;
    this.email = empEmail;
    //return this;

}
let emp1 = new CreateEmp("Pornima", 1234, "pornima@gmail.com");
let emp2 = new CreateEmp("Pooja", 1234, "pooja@gmail.com");

cl(emp1);
cl(emp2);

/* --------------------------------------------------------------------------------------------- */

/* abstraction >> Hide the details show the essentials
how we achived abstraction in javascript?  >> by using closure
*/


/*In JavaScript, there are two kinds of object properties
1) Data properties  2)Accessor properties*/

//Data property >>
const student = {
    // data property
    firstName: 'Pornima'
};

/* Accessor Properties >>In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:
get - to define a getter method to get the property value
set - to define a setter method to set the property value */

/* JavaScript Getter
In JavaScript, getter methods are used to access the properties of an object.  */

const student1 = {

    // data property
    firstName: 'Pornima',
    
    // accessor property(getter)
    get getName() {             //a getter method getName() is created to access the property of an object.
        return this.firstName;
    }
};

// accessing data property
console.log(student1.firstName); //o/p  Pornima

// accessing getter methods
console.log(student1.getName); // o/p Pornima     when accessing the value, we access the value as a property.

// trying to access as a method
console.log(student1.getName()); //o/p error     When you try to access the value as a method, an error occurs


/* JavaScript Setter
In JavaScript, setter methods are used to change the values of an object. */
const student2 = {
    firstName: 'Pornima',
    
    //accessor property(setter)
    set changeName(newName) {   //the setter method is used to change the value of an object.
        this.firstName = newName;
    }
};

console.log(student2.firstName); // Pornima

// change(set) object property using a setter
student2.changeName = 'Pornima';

console.log(student2.firstName); // Pornima


/* ====================================================================================================== */

/* JavaScript Object.defineProperty()
In JavaScript, you can also use Object.defineProperty() method to add getters and setters. 
Syntax >> Object.defineProperty(obj, prop, descriptor)
The Object.defineProperty() method takes three arguments.
The first argument is the objectName.
The second argument is the name of the property.
The third argument is an object that describes the property.*/

const student3 = {
    firstName: 'Pornima'
}

// getting property
Object.defineProperty(student3, "getName", {   //Object.defineProperty() is used to access and change the property of an object.
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student3, "changeName", {  //Object.defineProperty() is used to access and change the property of an object.
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student3.firstName); // Pornima

// changing the property value
student3.changeName = 'Pornima';

console.log(student3.firstName); // Pornima


/* ======================================================================================================= */
function Circle(rad){
    // this ={}  when we calling constructor function behind the seen 'this' empty object created
    this.radius = rad;
   /*  this.defaultLocation ={x:0, y:0};
    this.getDefaultLocation = function(){

    } */
    let defaultLocation ={x:0, y:0};       //to available only in function we used let for not handling to the user
    let getDefaultLocation = function(){   // we used to hide the details which is not accessable to the user 
    }                                      // in other language we used private to make the object private but in javascript class is not present so we used let and const to make it private

    this.draw = function(){
        cl('Draw Circle with location',defaultLocation);
        getDefaultLocation()
    };
    Object.defineProperty(this, 'df1',{   
        get : function(){   //to getting value
            return defaultLocation
        },
        set : function(val){   //to set the value
            if(val.x && val.y){
                defaultLocation =val
            }else{
                alert ('Please enter valid co-ordinates')
            }
        }
    })
    //return this
}

let circle = new Circle(10);
cl(circle)
//circle.defaultLocation = {x:50, y:50};
//cl(circle.draw())
//circle.defaultLocation ="Hello There"

//cl(defaultLocation)

//cl(circle.df1)
cl(circle);
circle.df1 = {x : 50, y : 50}
cl(circle.df1)





