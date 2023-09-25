/*
evenOdd
string Input name
'even'
'odd'
divide 2 % 0 get even   'tufa'---->even
divide 2 % 1 get odd    'kha'---->odd
*/
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