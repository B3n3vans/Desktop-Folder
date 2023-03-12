function twoArr(a,b){
    var newArr = [];
    for (i=0;i<a;i++){
        newArr.push(a[i]);
    }for (i=0;i<b;i++){
        newArr.push(b[i]);
    }return newArr;
}

console.log(twoArr([4, 5, 1], [7, 6, 1]));