/*
three input parameter
1 paramete -->1 gems mutiple 21
2 paramete -->2 gems mutiple 32
3 paramete -->3 gems mutiple 43
if total 2000 more
or total >2000 return total
*/
let numberOne= 100;
let numberTwo= 90;
let numberThree= 1;
function gemsToDiamond(numberOne, numberTwo, numberThree){
    let first= numberOne*21;
    let second= numberTwo*32;
    let third= numberThree*43;
    let sum= first+second+third;
    if(sum >=2000){
        let result= sum - 2000;
        return result;
    }
    return sum;
}
const diamond= gemsToDiamond(numberOne, numberTwo, numberThree);
console.log(diamond);