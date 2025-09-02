
console.log(console)
console.log("log");
console.info("info")
console.warn("warn")
console.error("error")
console.assert("eer" != false)
console.assert("err" == false)
// console.table(console);
console.time("a");
console.timeEnd("a");
console.time("Starting this process")
console.time("p1")
console.timeEnd("p1")

// Example
console.time("forLoop")
for(let i =0; i<5; i++){
    console.log(223)
}

console.timeEnd("forLoop")

console.time("WhileLoop")
 let i=0;
while(i<5){
    console.log(233)
    i++;
} 

console.timeEnd("WhileLoop")