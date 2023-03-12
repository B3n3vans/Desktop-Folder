// app to produce candy for every 2 miles ran up to 6 miles
var speed = 5.1;

for (var milesRan=2; milesRan<=6; milesRan+=2) {
    if (speed >= 5.5) {
        console.log("You earned a piece of candy! You've ran " +milesRan + " miles.");
    }
    else if (speed < 5.5 && milesRan <= 4){
        console.log("You've reached mile "+ milesRan +". Speed up to 5.5mph to earn a piece of candy at the next checkpoint.");
    }
    else {
        console.log("Great Work! You reached mile "+ milesRan +".");
    }

}
 // This code would need a loop because loops require less code than writting out every variant separately.
 /* I chose a starting point of 2  because the candy reward is given when the runner reaches mile 2.
 The loop should stop when the runner reaches mile 6 because thats when the candy reward is no longer given to the runners.
 The loop will know when to stop when the milesRan variable no longer is less than or equal to 6 which is the second condition in the for loop
 The third condition (milesRan+=2) lets the computer know to increase the milesRan variable by 2 each time the loop is ran.
 The only variable needed is milesRan which tracks how many miles the runner has ran.
 Another variable I added for the extra feature was speed */ 