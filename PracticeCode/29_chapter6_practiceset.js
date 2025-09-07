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


//  practice Q2
    let runAgain = true;
    const canDriv = (a)=>{
        return a>=18?true:false
    }
    while(runAgain){
        let a = prompt("Enter your age = ")
        a = Number.parseInt(a);
    if(canDriv(a)){
        alert("yes! , your can drive")
    }else{
        alert("No, you cannot drive")
    }
    runAgain = confirm("Do you want to re-check age again")
}

// practice Q3
let rnAgain = true;
const canDrivee = (ag)=>{
    return ag>=18?true:false
}
while(rnAgain){
    let ag = prompt("Enter your age = ")
    ag = Number.parseInt(ag);
    if(age<0){
        console.error("please enter a valid age ")
        break;
    }
if(canDrivee(ag)){
    alert("yes! , your can drive")
}else{
    alert("No, you cannot drive")
}
runAgain = confirm("Do you want to re-check age again")
}

// practice Q4

let Num = prompt("Enter a number")
Num = Number.parseInt(Num)

if(Num>4){
    location.href="https://google.com"
}
