
alert("Enter the value of a");
// iska use website pr alert show karane ke liye kiya jata hai
let a = prompt("Enter value here ");
// prompt ka use ham user se input lene ke liye karte he 
document.write(a); 
// document.write ka use ham apne wab page pr output show karane ke liye karte he 
a = Number.parseInt(a); // iska use kisi bhi string number ko integer me convert karta he 

alert("Yor entered a of type " + (typeof a)); // type of function ka use ham enter ki value ka type janne ke liye karnte hai
