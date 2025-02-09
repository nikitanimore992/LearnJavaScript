

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


// array filter method

let aar1 = [10,20,30,0,5,6]

let a2 =aar1.filter((a)=>{
        return a<10
})
console.log(a);

// in method me me array ki ahi value print hoti hai jo
//  true ho lekin orignal arrya kabhi bhi change nahi hota


// array reduce  method
// reduce ek value return karta hai 
// according to function and parametors

// first way to use reduce method 
let arr3 = [10,20,30,1,3]

let newarr1 = arr3.reduce((h1,h2)=>{
        return h1+h2
})
console.log(newarr1)


// second way to use reduce method
let red = (h1,h2)=>{
    return h1+h2
}
let newar=arr3.reduce(red)
console.log(newar)