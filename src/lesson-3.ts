// 
let country : string
let playerName: string 
let age: number 

country = "I Love Bangladesh"
playerName = "Mashrafi"
age = 56

console.log(`Country ` ,country);
console.log(`Player `,playerName);
console.log(`Age `,age);

// function
const sum = (a: number,b:  number)=>{
  return(a+b);
  
}

console.log(sum(5,6));

// array
const fruits = ["mango","apple","lemon"]
const mixed = ["name", "age", 5, true]

fruits.push("guava")
mixed.push("Borhan",5,false)

console.log(fruits);
console.log(mixed);

// object
const person = {
  name: "borhan",
  age: 35,
  isAdmin: false
}

person.age=29
person.isAdmin = true
console.log(`Person `,person);
