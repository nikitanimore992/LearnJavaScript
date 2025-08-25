

// without function 
let a = 10;
let b = 20;
let c = 30;
console.log("one pluse average of this ",(1+(a+b)/2))
console.log("one pluse average of this ",(1+(b+c)/2))
console.log("one pluse average of this ",(1+(a+c)/2))

//  with function 
// we can create create function 2 type 

        // function take paramerter
function OnePluseAvrg(x,y){
        return 1+(x+y)/2;
        }
let m = 12;
let n = 11;
console.log("one pluse average of this ",OnePluseAvrg(m,n))

        //  arrow function take paramerter
        const addTwoNumb =(p,q)=>{
                return a+b;
        }
        let num1 = 15;
        let num2 = 16;
        console.log("sum of this : ",addTwoNumb(num1,num2))

        // mostly uses function  without return and without paramerter

        const hello=()=>{
            console.log("Hello i am nikita , i am fine dude")
            
        }
        hello()

         // mostly uses function  with return without paramerter

         const hy=()=>{
            console.log("Hello i am nikita , i am fine dude")
            return "hiiiii...."

        }
        console.log(hy())