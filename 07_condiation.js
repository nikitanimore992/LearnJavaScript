let a = prompt("age"); // prompt alway take string type input 
console.log(a) 
a = parseInt(a); // parsiInt used for converting stringbto integer 

if(a>0){
    console.log("your are valid");
    alert("valid")
}else{
    console.log("your are not valid");
    alert("invalid")

}

// let a =17;
console.log("age is : ", a>18? "valid":"invalid")