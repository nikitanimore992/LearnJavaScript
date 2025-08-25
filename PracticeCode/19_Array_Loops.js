let num = [1,2,3,4,8]

// for loop
for(let i =0; i<num.length; i++){
    console.log(num[i]);
}

// forEach loop
num.forEach((element)=>{
    console.log(element*element)

})

//  Array.form
let name = "nikita";
let arr = Array.from(name);
console.log(arr);

// for of loop

for (let i of num){
    console.log(i);
}
// - ye sirt tarika he array item ko access karne ka 

// for in loop

for (let item in num){
    console.log(item);
}
// - ye hame array ki key provide karta hai