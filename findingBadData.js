/*
let age=[1, 43, -22, -11, 43, 54, -23];

*/
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