//let a  = 5;
//let b =10;
//let temp = a;
//a = b;
//b = temp;
//console.log(a, b);

//function swap(a,b){
  //  a = a+b;
    //b = a-b;
    //a = a-b;
    //return [a, b];
//}
//console.log(swap(5,10));

function swap (a,b)
{
    [a,b] = [b,a];
    return [a,b];
}
console.log(swap(5,10));