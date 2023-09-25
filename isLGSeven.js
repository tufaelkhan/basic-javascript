/*
input  a number
input -7 
result 7 hoi taile return
or result input number multiple 2

*/
let number = 12;
function isLGSeven(number){
    if(number >= 14){
        number= number*2;
    }
    else if (number < 13){
        number = number-7; 
         
    }
    return number;
}
const total= isLGSeven(number);
console.log(total);