var ofAge = 21;
var age = 13;
var admission = 0; 

function ageVerification() {                // age verifier checking 21 over and under
    if (age >= ofAge) {
        console.log('You can enter.');
    } else if (age < ofAge){
        console.log("You're not old enough yet!");
    }
}

function entranceFee() {                    // different admission for different ages
    if (age >= 65) {
    console.log('Admission fee: $' + admission);
    } else if (age < 65 && age >= 50){
        console.log('Admission fee: $' + (admission+5));
    } else if (age < 50 && age >= ofAge){
        console.log('Admission fee: $' + (admission + 15));
    } else {
        console.log("Nice Try!")
    }
}






ageVerification();
entranceFee()


