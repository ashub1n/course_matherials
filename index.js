/*
    Debug
    Profiling
    Errors
    recursive fuctions
    Complite crud
    make http request from server





// sorted from a to z
// [1,2,3,4,5,6,7,8,9,10]




let iterativeFunction = function (arr, x) {
  
    let start=0, end=arr.length-1;
         
    // Iterate while start not meets end
    while (start<=end){
 
        // Find the mid index
        let mid=Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===x) return true;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}




*/


// function multToMany(value){
//     let result = value * 2;
//     if (result > 0) {
//         result = multToMany(result);
//     }
//     return result;
// }
// multToMany(1);


const arrayTest = [];
for (let i = 0; i < 10000000; i++){
    arrayTest.push(i);
}

let count = 0

let iterativeFunction = function (arr, x) {
  
    let start=0, end=arr.length-1;
         
    // Iterate while start not meets end
    while (start<=end){
        count++;
       
        // Find the mid index
        let mid=Math.floor((start + end)/2);
        console.log(mid, start, end);
        // If element is present at mid, return True
        if (arr[mid]===x) return true;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}

//let res = iterativeFunction(arrayTest, 9999998);
function t(val){
    for(let j = 0; j < arrayTest.length; j++){
        if (val == arrayTest[j]) return true;
    }
    return false;

    
}
console.time('binary');
console.log(t(9999998));
//console.log('count of iterations:', count, res);
console.timeEnd('binary');