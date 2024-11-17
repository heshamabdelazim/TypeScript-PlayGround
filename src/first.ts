// first we make (npm tsc) then (npm --init) then edit config (watch elzero)
//the process of testing this file is the following  (tsc -w ) it generate transpiled js file then (node file.js) 
let test: number;
// test = "hello";
test = 34;
console.log(test)
// =====================
const variable_name: String = "variable value"
// =====================
let test2: bigint = BigInt(5545454)
/*
Enables working with extremely large
numbers without losing precision.
*/

// =====================

const id: symbol = Symbol("uniqueId");
/*
Used to create unique and immutable
values that can be used as object
properties or keys
*/
const symbol1 = Symbol("ritik");
const symbol2 = Symbol("ritik");
console.log(typeof symbol1 == typeof symbol2); // false
// =====================
function addNumbers(a: number, b: number): number {
    return a+b; //so this will be number because here after parameters you make it number
}
function addNumbers2(a: number, b: string): string {
    return a+b; //so this will be number because here after parameters you make it number
}
// =====================
const calculate = addNumbers; //You make previous function assigned to variables
const calculate2 = addNumbers2;
console.log(calculate(5, 10)); // Output: 15
console.log(calculate2(2, "test")); // Output: "2test"
// =====================
function great(name: string, greeting?: string): void { // ? means this parameter might not be existed if you delete ? the callBack will error incase
    if (greeting) {
        console.log(`${greeting}, ${name}!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}
great("John"); // Output: Hello, John!
great("Jane", "Good morning");
// Output: Good morning, Jane!
console.log(great("hesham")); //try to delete ? then this line will error
// =====================
let value: string | number = "Hello"; //  this | name is union, it means string or number
// =====================
// what is the keyword (type)
let beso: "nice" | "not nice" | 4 = "nice" //what happened here? this beso variable must contain one of these variables
// these choices can be like the following
type xyz = "ok" | "not Ok" | 3;
// let beso2: xyz = "Not ok"; //error why? N is capital but in type it is small
let beso3: xyz = 3; 
// 
type ifActive = "active" | "not active";// another example
let activating: ifActive = "active";
let notActivating: ifActive = "not active"
let beso4: "active" | "inActive" = "active" //this is it
// 
type abc = String;
let beso5:abc ="hello"
// 
type Person = { name: string | "unknown", age?: number } //notice this ? maybe not needed, It's ok
type Employee = { id: number, department: "frontend" | "backend" }
type EmployeeDetails = Person & Employee; //to add 2 types together
const ahmedWorker: EmployeeDetails = { name: "Ahmed",age:34, id:1, department:"backend"}
console.log(ahmedWorker)
// 
let data: any = 10;
data = "Hello";
data = true; // whatever blabla default loosly weak js code
// ======== unknown
/*
Variables of type unknown can hold values of (any type) but require type
checking or assertions for (safe usage).
It provides a (safer alternative to the any type) when dealing with dynamic or uncertain data.
*/
let beso6: unknown = "hello";
let countingLength: number;
if (typeof beso6 === "string") {
    countingLength = beso6.length;
} else {
    countingLength = 0 //try to comment this line
    //You will find error because (countingLength will be undefined not number) //Semantic analysis
}
console.log(countingLength); //output is 5
// ======== never
/*
No return ever, the best practice is for functions like the following 
sounds like void, does same meaning
*/
type Role = 'admin' | 'user' | 'guest';
function getRole(user: { id: number, Auth?:string }): Role | void {
    // ... logic to determine the role
    if (user.id === 1) {
        return 'admin';
    } else if (user.id === 2) {
        return 'user';
    } else {
        // If the user ID doesn't match any known role,
        // throw an error or return a default value
        throw new Error('Invalid user ID');
    }
}

console.log(getRole({ id: 1 })); //output is admin
// ======== interface
//it's the same like the keyword (type) but different syntax
 interface Human{
    name: string,
     age: number,
}
interface employee extends Human { //to combine 2 interfaces together 
    salary: number;
}
const myWorker1: employee = {
    name: "ahmed",
    age: 34,
    salary: 5000,
}
console.log(myWorker1); //works
// Also you can combine 2 interfaces in the (type) not only using extend
interface employeeTwo{
    kpis: number
}
type one = Human & employeeTwo; //IT MUST BE (type)
const myWorker2:one = {
    name: "test",
    age: 34,
    kpis:300
}
console.log(myWorker2); //works
//Also you can => type = interface & type
type testingTwo = {
    plus:number
}
type two = Human & testingTwo;  //works
const myWorker3: two = {
    name: "another test",
    age: 34,
    plus:444,
}
console.log(myWorker3); //works
//====== readonly
interface Point{
    readonly x: number,
    y:number,
}
const myPoint: Point = {
    x: 3,
    y:5,
}
// myPoint.x = 6; this is error you can not edit | modify
myPoint.y = 2; // you can modify
console.log(myPoint)

// =====================
const test6: myFun = (x, y) => x + y // you can make your variables before interface
interface myFun { //to interface the function
    (x:number, y:number):number //this maybe used for any variables or inside interface of other objects
}
const test8 = (x: number, y: number): number => x + y //it's the same

type someRules = "grown" | "not-grown"
// also inside objects that has functions we can make myFun
interface PersonTwo{
    name: string,
    calcAge: myFun //notice inside interface, we made a function that got interface
    ifGrown: someRules // inside interface, we can write (the type) 
}
const myMan: PersonTwo = {
    name: "hesham",
    calcAge: (x,y)=>x-y,
    ifGrown:"grown",
}
console.log(test6(3,5))//works
console.log(test8(3,5))//works the same
console.log(myMan.calcAge(2024, 1998))//works

//not finished