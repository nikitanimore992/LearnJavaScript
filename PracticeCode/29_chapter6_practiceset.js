// practice que 1

let age = prompt("Enter a Number ","24")
age = Number.parseInt(age)

//create a function
const canDrive = (age)=>{
    return age>=18?true:false
}

// use our function 
 if(canDrive(age)){
    alert("yes you can drive")
 }else{
    alert("you cannot drive")
 }

 

