var arr = [5, 1, 341, 2, 46, 8, 4, 74, 81, 19, 5];                    //Original Array
//var newarr = []; 

arr.sort(diaper);
//arr.reverse(diaper);
//console.log(arr);

function diaper(a,b) {
    return a-b;
}
var lowest = arr[0];
var highest = arr[arr.length-1]
console.log(lowest);
console.log(highest);



newarr = concat