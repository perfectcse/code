//function temp(celsius){
   // let fahrenheit = (celsius * 9/5) + 32;
 //   return fahrenheit;
//}
//console.log(temp(30));
function solution(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit.toFixed(1) + " " + celsius.toFixed(1);
}
console.log(solution(25));
console.log(solution(0.0));
console.log(solution(100));
console.log(solution(-10));
console.log(solution(37));


//Input → Celsius → Formula → Fahrenheit → Format → Output String → Return
//“I take the Celsius input, apply the conversion formula to calculate Fahrenheit, format both values to one decimal place, and return them as a space-separated string.”
// Input → Process → Format → Return