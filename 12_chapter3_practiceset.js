
// --------------problem no 1-----------------
//  Q -   Write a program to print the marks of a student in an object using for loop
//  without for in loop using place for loop
const marks={
    nikita : 45,
    neha : 54,
    yogita : 85,
    durga : 90,
    sujata : 65
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("This is marks of "+Object.keys(marks)[i]+" are "+ marks[Object.keys(marks)[i]])
}
// --------------problem no 2-----------------
// Q - Write a program in Q-1 using for in loop.
// same problem but using for in loop

for(let key in marks){
    // console.log(key)
    console.log("This is marks of "+key+ " are "+marks[key])
}


// --------------problem no 3-----------------
// Q -Write a program to print “try again” until the user enters the correct number.

let cn = 45;
let i ;
while(i!=cn){
     i = prompt("Enter a Number : ")
    if(i==cn){
        console.log("you enterd correct Number ")
    }else{
        console.log("try again")
    }
}
    

// --------------problem no 3-----------------
// Q -  Write a function to find mean of 5 numbers.

const mean = ( a , b , c , d ) =>{
    return (a+b+c+d)/4;
}

console.log("mean for this number ",mean(4,5,6,7))