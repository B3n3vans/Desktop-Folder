var arr = [];
var read = [2, 5, 1, 4, 0, 9];
var stop = [2, 5, 10, 7];

function concat() {

for(i=0;i<read.length;i++){
    arr.push(read[i]);
}for (i=0;i<stop.length;i++){
    arr.push(stop[i]);
}
return(arr);
}
console.log(concat(read, stop));

/*var grind = read.concat(stop);
console.log(grind);*/

//learning Concat 
//Concat combines two arrays into a new array

