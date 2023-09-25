// description: mindGame function input a number parameter. then multiple by3, then addition by 10, then divide by 2 & finally substrustion by -5. after return a number;
let num = 8;
function mindGame(num){
    num *= 3;
    num += 10;
    num /= 2;
    num -= 5;
    return num;
}
const total= mindGame(num);
console.log(total);

// description: evenOdd function input a string parameter. then string length count. count if is even, return even. else count is odd, return odd. after return even/odd;
let place='dhaka ';
function evenOdd(place){
    let count=place.length;
    if(count%2 == 0){
        let aleart='even';
        return aleart;
    }else{
        let aleart='odd';
        return aleart;
    }
    return count;
}
const result= evenOdd(place);
console.log(result);

// description: isLGSeven function input a number parameter. then if number grether then or equl 14, multiple by 2, return this number. else if substruction by -7.  parameter number lessthen or equl 7 return result.

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

// description: findingBadData function input a array parameter. then array each element count. then if array element is lessthen 0, each elemen is count. after return a number;

let age=[1, -43, 22, -11, 43, 54, -23];
function findingBadData(age){
    let count=0;
    for (let i=0; i<age.length; i++){
        let element= age[i];
        if (age[i] <0){
            count +=1;
        }
    }
    return count;
}
const total= findingBadData(age);
console.log(total);

// description: gemsToDiamond function input 3 number parameter. then first number multiple by 21, second number multiple by 32, third number multiple by 43. then all number addition. sum if grethethen or equal 2000, next sum-2000 return result. else return sum.

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
