//function findLargest(arr) {
    //let max = arr[0];  // assume first element is largest
    //for (let i = 1; i < arr.length; i++) {
        //if (arr[i] > max) {
       //     max = arr[i];
     //   }
   // }
 //   return max;
//}

//console.log(findLargest([10, 5, 8, 20, 3])); // Output: 20

function findLargest(arr) {
    return Math.max(...arr);
}

console.log(findLargest([10, 5, 8, 20, 3])); // Output: 20
