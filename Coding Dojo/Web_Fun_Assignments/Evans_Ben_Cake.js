function howMuchLeftOverCake() {           // creating a function to figure out how much cake will be leftover
    var numberOfPieces = 12;
    var numberOfPeople = 5;
    var remainingPiecesOfCake = numberOfPieces%numberOfPeople;

    return(remainingPiecesOfCake);          // returning the modulo (remainder)
    }

    var leftOvers = howMuchLeftOverCake();   // assigning the remainder to leftOvers

    console.log(leftOvers + " pieces of cake left.");   //Feature 1

    if (leftOvers == 0){                                // Feature 2
        console.log("No leftovers for you!");
    }
        else if (leftOvers > 0 && leftOvers <= 2){
        console.log("You have some leftovers.");
    }
        else if (leftOvers >2 && leftOvers <=5){
        console.log("You have leftovers to share.");
    }
    else {
        console.log("Hold another party!");
    }