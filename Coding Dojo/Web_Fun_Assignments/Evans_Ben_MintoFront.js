/*function minToFront(arr){
    
    var low = arr[0];
    var newArr = [];
    newArr.push(0);

    for(var i=0;i<arr.length; i++){
        newArr.push(arr[i]);
        if(arr[i]<low){
            low = arr[i];
            //newArr.pop();
        }
    }
    newArr[0] = low;
    return newArr;
}
console.log(minToFront([5, 93, 22, 4, 14 ,15, 1, 6]));*/


function removeLow(newArr){
    var lowest = newArr[0];
    //var popThis =0;
    for(i=0; i<newArr.length; i++){
        if (newArr[i] < lowest){
             //popThis = 
            lowest = newArr[i];
            newArr[newArr.length] = lowest;
        }
    }newArr.pop();
    return newArr;
}


console.log(removeLow([5, 93, 22, 4, 14 ,15, 1, 6]));