
function countWayToSpilit(s){
    const n =s.length;
let count =0;

for(let i= 1;i< n;i++){
for(let j= i+1;j< n;j++){

    const a =s.substring(0,i);
    const b =s.substring(0,j);
    const c =s.substring(j);

    if(a+b!== b+c && b+c!==c+a && c+a !== a+b ){
        count++

    }
  } 
}

return count;
}
const inputstring = "abcab";
const result = countWayToSpilit(inputstring);
console.log(result);