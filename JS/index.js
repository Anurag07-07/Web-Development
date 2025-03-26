////////////////////////////////////////////////DAY 1/////////////////////////////////////////////////////

/*

console.log("Hello World");

const first_name = "Anurag"
const last_name = "Raj"
console.log(`Good Morning ${first_name} ${last_name}`);

function greet(name,gender) {
  if (gender=='male') {
    console.log(`Hello Mr ${name}`);
  }else{
    console.log(`Hello Ms ${name}`);
  }
}

greet("Anurag","male")

//const value can't be changed

for (let i = 1; i <= 10; i++) {
  console.log(i,end="");
}
//Arrays

const ages = [21,22,23,24,25]

for (let i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}

function greet(allUsers) {
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i]['gender']=="Male") {
      console.log(`Welcome Mr ${allUsers[i]['name']}`);
    }else{
      console.log(`Welcome Ms ${allUsers[i]['name']}`);
    }
  }  
}


const allUsers = [
{
  name:"Anurag",
  gender:"Male"
},
{
  name:"Anushka",
  gender:"Female"
},
{
  name:"Aniket",
  gender:"Male"
}
]

greet(allUsers)

function sum(a,b) {
  return a+b
}

console.log(sum(45,89));

//Callbacks

function sum(num1, num2,cb) {
  let result = num1 + num2;
  return cb(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

const ans = sum(45,56,displayResult)  //Passing the function as an argument is called Callback Function
console.log(ans);

//One way

function calculatorArithmetic(a,b,type) {
  if (type == 'sum') {
    return a+b
  }else if(type == 'diff'){
    return a-b
  }else if (type == 'mul') {
    return a*b
  }else if (type == 'div') {
    return a/b
  }
}

const ans1 = calculatorArithmetic(45,56,'sum')
const ans2 = calculatorArithmetic(45,56,'diff')
const ans3 = calculatorArithmetic(45,56,'mul')
const ans4 = calculatorArithmetic(45,56,'div')
console.table([ans1,ans2,ans3,ans4]);

//Way one Callback Function

function add(a,b) {
  return a+b
}
function sub(a,b) {
  return a-b
}
function mul(a,b) {
  return a*b
}
function div(a,b) {
  return a/b
}

function calculate(a,b,cb) {
  return cb(a,b)
}

const ans1 = calculate(10,20,add)
const ans2 = calculate(10,20,sub)
const ans3 = calculate(10,20,mul)
const ans4 = calculate(10,20,div)

console.log([ans1,ans2,ans3,ans4]);

function greet(params) {
  console.log(`Hello World`);
}

function greet1(params) {
  console.log(`Hello Utha ja`);
}

//Syntax: setTimeout(function,time)
setTimeout(greet,1000)

//Syntax: setInterval(function,time)
setInterval(greet1,1000)

// if the arguments are different then you can't use callback

// Ex 
function mul(a,b,c) {
  return a*b*c
}

function callback(a,b,cb) {
  return cb(a,b)
}

const ans = callback(45,56,mul)
console.log(ans);

*/