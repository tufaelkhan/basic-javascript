let num = '5';
function mindGame(num){
    num *= 3;
    num += 10;
    num /= 2;
    num -= 5;
    return num;
}
const total= mindGame(num);
console.log(total);