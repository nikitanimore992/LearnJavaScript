
alert("Enter the value of a");
// iska use website pr alert show karane ke liye kiya jata hai

let a = prompt("Enter value here " , "584");
// prompt ka use ham user se input lene ke liye karte he , age agar hame is tarah dikh raha he be like value ham user se puch bhi rahe he but isme ek balue apne allready dal rakhi hai to use ham prompt defalut value man leta hai

document.write(a); 
// document.write ka use ham apne wab page pr output show karane ke liye karte he 

a = Number.parseInt(a); // iska use kisi bhi string number ko integer me convert karta he 

alert("Yor entered a of type " + (typeof a)); // type of function ka use ham enter ki value ka type janne ke liye karnte hai

