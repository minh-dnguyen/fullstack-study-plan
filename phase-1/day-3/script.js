console.log("Hello, JavaScript!");

let x = 1;
let y = 2.3;
let z = 4/5;

const PI = 3.14159;

let text = "Welcome";

console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(z));
console.log(typeof(PI));
console.log(typeof(text));

console.log(Number(x));
console.log(Number(y));
console.log(Number(z));
console.log(String(PI));
console.log(Number(text));

console.log(`This is the sum of x and y and z: ${x + y + z}`);

let compareXY = x > y;
let compareXZ = x > z;
let compareYZ = y > z;

console.log(compareXY);
console.log(compareXZ);
console.log(compareYZ);

let compareXYandXZ = compareXY && compareXZ;
let compareXYorXZ = compareXY || compareXZ;
let compareXYnotXZ = compareXY != compareXZ;

console.log(compareXYandXZ);
console.log(compareXYorXZ);
console.log(compareXYnotXZ);

let checkEven = x%2 ? "Even" : "Odd";
console.log(checkEven);

let newX = x++;
let newY = ++y;
let newZ = z--;

console.log(newX);
console.log(newY);
console.log(newZ);

let str = "   Hello World   ,Hello Javascript";
console.log(str.trim());
console.log(str.indexOf("World"));
console.log(str.substring(10,15));

let firstName = "Duc Minh";
let lastName = "Nguyen";
console.log(`This is the full name: ${firstName} ${lastName}`);

my2FirstName = firstName.split(" ");
console.log(my2FirstName);
console.log(my2FirstName.join(" ") + " " + lastName);

let numbers = [1,2,3,4,5];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

numbers.push(6);
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

numbers.pop();
console.log(numbers);

let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

let evens = numbers.filter(number => number % 2 === 0);
console.log(evens);

numbers.forEach(number => console.log(number));

let numsMatrix = [[1,2,3],[4,5,6],[7,8,9]];

console.log(numsMatrix[0][0]);
console.log(numsMatrix[1][1]);
console.log(numsMatrix[2][2]);

let firstElementsInMatrix = [...numsMatrix[0]];
console.log(firstElementsInMatrix);

let lastElementsInMatrix = [...numsMatrix[2]];
console.log(lastElementsInMatrix);

let mergedMatrix = [...numsMatrix[0], ...numsMatrix[2]];
console.log(mergedMatrix);

let Person = {
    firstName: "Duc Minh",
    lastName: "Nguyen",
    age: 22,    
    cityInfo : {
        city: "Hanoi",
        country: "Vietnam"
    },
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }    
}

console.log(Person.firstName);
console.log(Person.lastName);
console.log(Person.age);

Person.age = 28;
console.log(Person.age);

Person.sayHello();

console.log(Object.keys(Person));
console.log(Object.values(Person));
console.log(Object.entries(Person));

let {firstName: personFirstName, lastName: personLastName, age} = Person;
console.log(personFirstName);
console.log(personLastName);
console.log(age);

function greeting(firstName = "Duc Minh", lastName = "Nguyen") {
    console.log(`Hello, my name is ${firstName} ${lastName}`);
}

const greeting2 = function(firstName = "Duc Minh", lastName = "Nguyen") {
    console.log(`Hello, my name is ${firstName} ${lastName}`);
}

let globalVar = "I am global";

function scopeTest() {
    let functionVar = "I am inside a function";
    var functionVar2 = "I am also inside a function (var)";
    
    console.log("Inside function, accessing Global:", globalVar); 
    console.log("Inside function, accessing Function Scope:", functionVar);
    
    if (true) {
        let blockLet = "I am block scoped (let)";
        const blockConst = "I am block scoped (const)";
        var blockVar = "I am NOT block scoped (var)";
        
        console.log("Inside block:", blockLet);
        console.log("Inside block:", blockConst);
    }
    

    console.log("Outside block (in function), accessing var:", blockVar); 
}

scopeTest();

console.log("--- Hoisting ---");
hoistedFunction(); 

function hoistedFunction() {
    console.log("I am a hoisted function!");
}

console.log("Accessing var before declaration:", hoistedVar); 
var hoistedVar = "I am a hoisted var";

let hoistedLet = "I am a hoisted let";


greeting();
greeting2();
