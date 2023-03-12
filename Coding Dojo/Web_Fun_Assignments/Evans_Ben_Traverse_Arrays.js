//using this code for problem solving code challenge
// psuedocode or extra comments can assist with problem solving

// #1 print each num
var arr1 = [8, 6, 7, 5, 3, 0, 9];                 // This array needs each number printed out
for (var i=0; i < arr1.length; i++){              //As i goes through the array
    console.log(arr1[i]);                         //The console should print each number.
}

// #2 sum and index position
var arr2 = [4, 7, 13, 13, 19, 37, -2];            // for this code we will need to find out 2 seperate things
var sum = 0;                                      // we have to figure out the Sum and identify the number of each 
for (var i = 0; i<arr2.length; i++) {             // index inside the array.
    sum = sum + arr2[i];                          // this line will continue to increase the sum
    console.log(sum);                             // these two lines will print the sum and number associated with the index
    console.log(arr2[i]);
}

// #3  print only numbers greater than 5 + "No Dice Challenge"
var arr3 = [6, 2, 12, 14, -24, 5, 0];
var noDice = 'No Dice';                           // we will have to get the computer to understand that we are only looking for numbers over 5
for (var i = 0; i <arr3.length; i++){             // then we have to replace anything less than 5 with 'No Dice'
    if (arr3[i] > 5){                             // an if else statement will identify if the value of the index is above or below 5
        console.log(arr3[i]);                     // if the value is above 5 we will console log it here
    } else {
        arr3[i] = noDice;                         // if the value is below 5 we can replace the index position value with 'noDice'
    }
}
console.log(arr3);


/*
The most difficult part of problem solving is having the patience to set aside time to actually do the problem solving.
many times I find myself rushing into Visual Studio Code and immediately begin typing code. Moving forward I'll need to slow down and 
focus on finding a solution or a path so that I can solve my problem quicker.
*/