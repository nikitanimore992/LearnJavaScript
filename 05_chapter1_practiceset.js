

// chapter 1 practice set Q1

//chapter 1 - Q1 create a variable type of String and try to ad number to it 

let a = "nikita"
let b = 10;
console.log(a+b);


//chapter1 = Q2 Use type of operator to find the data type of the string in last question.

console.log(typeof (a+b));
// console.log(typeof a+b);


//  chapter 1= Q3 create a const object in javaScript can you change it to hold a number later?

const item ={
    name : "nikita",
    section : 1,
    isPrincipal:false
}
// item = 54;
// console.log(item)

//  no objet can not change it letter it show you error in your code 

// chapter 1= Q4 Try to add a new key in the const object is last question when you were to do it;

item["friend"]= "Dhiraj"
item["name"]="Nisha"
console.log(item)
 
//  direct object ko koi value ya data assien nahi kar sakte but usi object ke rafrence
//  se ap key and value chage kar sakte hai or add bhi kar skte  hai new data 

// chapter 1= Q5 write a javaScript program to create a word meaning dicnory of  words;

const disc = {
    appreciate:"o enjoy something or to understand the value of somebody/something",
    Selfie:"just won World of the Year from the Oxford English Dictionary.",
    Love:"We love you Love is blind",
    Novel:"The Grapes of Wrath is John Steinbeck's best novel",
    Season:"The seasons are spring, summer, autumn, and winter"


}
// console.log(disc.appreciate)
console.log(disc['appreciate'])


// to way to acces the object item and value.
