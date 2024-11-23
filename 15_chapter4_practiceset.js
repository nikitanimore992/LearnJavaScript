

//  1.    What will the following print in JavaScript? console.log(“har\””.length)

console.log("har\"".length)
/* out is - 4  which is length of the string where 
har is String and(\") is also part of Strint is it
will count 1 work. */

// 2.    Explore the includes, startsWith and endsWith functions of a string.

// .includes 


const stns = "Hello i am Nikita , i am fine yrr  Nikita";
const word = "Nikita";
console.log(stns.includes(word))
console.log(`The word "${word}"${stns.includes(word)?'is':'is not' } in the Sentence`);

/* .include function ka use ham kisi bhi sentance 
me ye check karne ke liye karte hai ki usme particular 
word jo ham find karna chahte hai wo hai ya nahi */

// startswith

console.log(stns.startsWith(word)? 'yes':'no')

/* startwith function ka use ham kisi particular 
function ke start me koi word hai ya nahi ye find
 karne ke liye karte hai  */

 // endstwith

 console.log(stns.endsWith(word)? 'yes':'no')
    
 /* endstwith function ka use ham kisi particular 
 function ke end me koi word hai ya nahi ye find
  karne ke liye karte hai  */
