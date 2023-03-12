function greet(name, time) {
    var name;
    var time = 1400;                                 // insert military time here
        if (name == "Count Dooku"){
        console.log("Im coming for you, Dooku!")
        }
        else if (time <= 1200){
        console.log("Good Morning " + name);
        }
        else if (time >1200 && time <=1500){
        console.log("Good Afternoon "+ name)
        }
        else {
        console.log("Good Evening" + name);
        }
    
}

greet("Thomas");