


// 14_StringMedthods.js



// String 0 index se start hoti hai 

let name = "nikita\n";
// ---------------------length-----------------------------------

    console.log(name.length)

// variable ke litral ke sath .lenght (property) ka use karke ham kisi bhi String ki length nikal sakte hai

// -----------toUpperCase--and-toLowerCase-----------------------
    
/* toUppercase and toLowercase pre defind function hai
 ----->toUppercase puri Sctring to capital letter me karne ke liye use kiya jata hai */
     console.log(name.toUpperCase())

/* ----->toLowercase hai puri String to Small letter me karne ke liye use kiya jata hai */

    console.log(name.toLowerCase())


// ---------------------slice-----------------------------------

/* 
------>slice basicaly 2 type se ham kisi bhi String me use kar sakte    sakte .
------> 1 paramer leta hai and single parameter  leta hai but if you want to use single paramer slice that will print full string after you choose index value including index value1 */

    console.log(name.slice(2)) 
          
 /*
------> 2 slice ka use karke ham kisi String se particular utne part     ko nikal sekte hai jitne ki hame need hoti hai */

    console.log(name.slice(2,4))


// ---------------------substring()-----------------------------------
// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().
let sr = "Apple, Banana, Kiwi";
let part = sr.substring(7, 13);    

// ---------------------substr()-----------------------------------
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

// The substr() method extract a part of a string
// and returns the extracted parts in a new string:

let str = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = str.substr(7,6);

    
// ---------------------replace-----------------------------------
    
        /* replace ka use kisi bhi String se kuch particular part agar replce karna chahte hai than you can go .replace 
        for exa.------>*/
        
        console.log(name.replace("ni","An"))
        let fullname = "Nikita Nimore"
        console.log("your full name is :",fullname)
        // after using replace method 
        console.log("your full name is :",fullname.replace("Nimore","Rajput"))
        
    
// ---------------------concat-----------------------------------

// if you want to add two String you can go for concate method for example
    let f1= "Ankit"
    let f2= "Dhiraj"
    console.log(f1.concat(" is a friend of ",f2 , " Ok."))

// ---------------------trimStart()-----------------------------------
    // The trimStart() method works like trim(), but removes whitespace only from the start of a string.

    let text1 = "     Hello World!     ";
    let text2 = text1.trimStart();

// ---------------------trimEnd()-----------------------------------
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

let tex1 = "     Hello World!     ";
let tex2 = tex1.trimEnd();

// ---------------------charAt()-----------------------------------

// The charAt() method returns the character at a specified index (position) in a string:
    let text = "HELLO WORLD";
    let char = text.charAt(0);


// ---------------------charCodeAt()-----------------------------------
/*The charCodeAt() method returns the code of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535)*/

  let nme = "HELLO WORLD";
  let c = nme.charCodeAt(0);

// ---------------------at()-----------------------------------
// The at() method returns an indexed element from a string:
const nm = "W3Schools";
let letter = name.at(2);


// ---------------------Padding----------------------------------
// ---------------------padStart()-----------------------------------

// The padStart() method pads a string from the start.
// It pads the string with another string (multiple times) until it reaches a given length
// The padStart() method is a string method.

// To pad a number, convert the number to a string first.
let tt = "5";
tt = tt.padStart(3,"1");

// output
// 115

// ---------------------padEnd()-----------------------------------
// The padEnd() method pads a string from the end.

// It pads a string with another string (multiple times) until it reaches a given length.
let tx = "5";
let padded = tx.padEnd(4,"0");

// output is - 5000

// ---------------------repeat()-----------------------------------

// The repeat() method returns a string with a number of copies of a string.

// The repeat() method returns a new string.

// The repeat() method does not change the original string

let t = "Hello world!";
console.log(t.repeat(2));

// output is Hello world!Hello world!

// // ---------------------ReplaceAll()-----------------------------------

let S = "I love cats. Cats are very easy to love. Cats are very popular."
let ss = S.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
console.log(ss)

// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

let dosl = "I love cats. Cats are very easy to love. Cats are very popular."
console.log(dosl.replaceAll(/Cats/g , "Dogs"))


// ---------------------Converting a String to an Array-----------------------------------
// ---------------------split()-----------------------------------
// A string can be converted to an array with the split() method:
// >Display the first array element, after a string split:

let txt = "a,b,c,d,e,f";
const myArray = txt.split(",");
console.log(txt.split,myArray[2])
// ---------------------concat-----------------------------------
// ---------------------concat-----------------------------------
// ---------------------concat-----------------------------------
// ---------------------concat-----------------------------------
// ---------------------concat-----------------------------------
// ---------------------concat-----------------------------------
    
