
let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);

console.log(id1.matches(".class1")); // false
console.log(id1.matches(".box")); // true
console.log(sp1.closest("#sp1")); // div with id sp1
console.log(id1.contains(sp1)); // true
console.log(sp1.contains(sp1)); // true
console.log(sp1.contains(id1)); // false