


//chapter 2 practiec set

//Question 1 - use logical operator and find wegther the age of a person lies between 10 and 20?
// solutions...

let age = prompt("age is : ")
if(age>10 && age<20){
    alert("age lies 10 and 20 ")
}else{
     alert("age is doesn't lies 10 and 20 ")
}

// Question 2 = Demostrate the switch case use in javaScript

let a = prompt("age is :");
a = Number.parseInt(a);
switch(a){
    case 11 :
        console.log("your age is 11")
        break
        case 12 :
        console.log("your age is 12")
        break
        case 13 :
        console.log("your age is 13")
        break
        case 14 :
        console.log("your age is 14")
        break
        case 15 :
        console.log("your age is 15")
        break
        default :
        console.log("your age is not special")
        break
}

// Question 3 - what is the javaScript  program to find whether a number is disible by 2 and 3 


let num = prompt("age is :");
num = Number.parseInt(a);
if(num%2==0 && num%3==0){
    console.log("number is divisible")
}else{
    console.log("number is not divisible")
}


let n = prompt("age is :");
n = Number.parseInt(a);
if(n%2==0 && n%3==0){
    console.log("number is divisible")
}else{
    console.log("number is not divisible")
}

// Question 4  = wirte a program  "you can drive " and "you can not drive " base on age 10 using turney operator 

let ag = prompt("age is :");
age = Number.parseInt(ag);
console.log(age>10? "you can drive" : "you can not drive")


