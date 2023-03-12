var age = 12;     // user will insert their age. Age must be >= 10
var height = 45;  // User will insert their height in inches. Height must be >= 42
var minAge = 10;   //Minimum age for riders
var minHeight = 42;   // minimum height for riders

if (age >= minAge && height >= minHeight) {     //Age over 10 and height over 42
    console.log('Get on that ride kiddo');
}
else if (age < minAge && height >= minHeight) { //Age under 10 and height over 42
    console.log('Your not quite old enough');
}
else {                                          //Age over 10 and height under 42
    console.log("You've got some growing to do");
}