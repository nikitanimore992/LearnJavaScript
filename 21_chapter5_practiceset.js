




// problem number 1 : Create an array of numbers and take input from the user to add numbers to this array.

let arr = [10,20,30,1,5,6]
let a = prompt("Enter any number that you want to add in array = ")
a=Number.parseInt(a);
arr.push(a)
console.log(arr)



// problem number 2 : Keep adding numbers to the array in question-1 until 0 is added the array.

let arr1 = [1,2,3,4,5]
let b;
do{
    b=prompt("Enter Number : ")
    b = parseInt(b)
    arr.push(a);
    
}while(b!=0)
console.log(arr1);



// problem number 3. filter for numbers divisible by 10 from a given array.

let arr2 = [10,2,30,40,5 ,30,7,27]
let n  = arr2.filter((num)=>{
    return num%10==0;
})
console.log(n);



// problem number 4. Create an array of square of given numbers.

let arr3 = [10,2,30,40,5 ,30,7,27]
let m  = arr3.map((n)=>{
    return n*n
})
console.log(m);




/*problem number 5. Use reduce to calculate factorial of a given number from an array of
first n natural numbers (n being the number whose factorial needs to be calculated).
*/

let arr4 = [1,2,3,4,5,6,7,8]
let numb  = arr4.reduce((x1,x2)=>{
    return x1*x2
})
console.log(numb);
