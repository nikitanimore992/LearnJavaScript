

// map filter and reduce method ye sare higher order array methods hote hai 
// map ham tab use karte hai jab hame koi naya array banana ho or array 
// ham tab use karte hai jab hame present array me koi operation perform karna ho 
// ye ek naya array banata hai jabki for each loop function karta hai 


// array map mathod
let arr = [25,35,30]

let a = arr.map((value ,index, array)=>{
    console.log(value , index,array)
    return value+1
});
console.log(a) // naya array print ho gaya
// ham only value bhi print kar sakte hai 
// value ke sath index value bhi print kar sakte hai 
// complete aray bhi print kar sakte hai

