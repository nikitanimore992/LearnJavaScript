

// second day of array m

let num = [12,13,14,'nikita','yogita' ,12,13,14,45,16,85,1,0,69,52];
let num1 =[15,54,12,54,45,5,44,44,58,'neha'];
let num2 =[15,54,12,54,45,5,44,'Saloni','ankit', "Dhiraj"];
console.log(num);

//delete num[3]; 

/* if we are using delete method than it can
delete element ye array ki length ko kam nahi karega jis 
element ko delete kiya gaya hai particular element ki jagat
 pr empty element likha tha hua consol pr print hon jayega */
console.log(num);
let newArray = num.concat(num1); 
let newArrayy = num.concat(num1,num2); 

console.log(newArray);
console.log(newArrayy);

// if you want to concate to array than you should go for concate method in javaScript


// sort method
num.sort(); // num.sort ka use karke ham apne array ko arange kar sakte hai 
console.log(num);


