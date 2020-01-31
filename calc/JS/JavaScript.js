// function calc(a,b,c){

//       switch (c){
    
//         case "+":
//           return a+b;

//         case "-":
//           return a-b;

//         case "*":
//           return a*b;

//         case "/":
//           if(b != 0) {
//             return a/b; 
//           }
//           else{
//             return alert('На нуль не можна ділити')
//           }
//          console.log(c); }
//     }
function plus(a,b) {
    return (a + b);
}

function minus(a,b) {
    return (a - b);
}

function multiply(a,b) {
    return (a * b);
}

function divide(a,b) {
    return (a / b);
}

function calc() {

    var x = document.getElementById("oper1").value;
    var y = document.getElementById("operx").value;
    var z = document.getElementById("oper2").value;
    var w = document.getElementById("result").value;

    switch (y) {
        case '0':
            w = plus(x, z);
            break;

        case '1':
            w = minus(x, z);
            break;

        case '2':
            w = multiply(x, z);
            break;

        case '3':
            w = divide(x, z);
            break;

        default:
            w = "Don't really know..";
    }
console.log(w);
}
    