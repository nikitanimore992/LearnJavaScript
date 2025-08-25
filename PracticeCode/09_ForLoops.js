

// program to add n natural numbers

// for loop 
let n = prompt("Enter any number : ");
n = Number.parseInt(n);
let sum = 0;
for(let i =0; i<n; i++){
    sum = sum + (i+1)
    console.log( (i +1)," +")
}
console.log("sum of first "+n+"natural number  is "+sum);



//------------- for in loop --------------

let obj = {
    nikita :20,
    ankit :19,
    dhiraj :19,
    saloni :20,
    bhumika : 18
}
    for (let a in obj){
        // console.log(a);
        console.log("markes of "+a+" are "+obj[a])
    }
    
//------------- for of loop --------------
//   for of loop take string type paramerter 

for (let a of "Nikita"){
         console.log(a);
        
    }
