/* AGE KATA */

function main(){
    var age = prompt("How old are you?");
    var born = prompt("What year were you born?");
    if (myAge(age)!=born) alert("Underaged");
        else alert("Welcome!");
}

function myAge(age){
    const d = new Date(2024);
    d.getFullYear();
    var birthYear = d - age;
    return birthYear;
}


/* PET KATA */

function main(){
    var dogName = prompt("What is your dogs name?");
    var cups = prompt("How many cups of food do they get each day?");
    feedDog(dogName, cups);
}

function feedDog(dogName, cups){
    for (; cups>0; cups--) {
        alert("Here's a cup of kibble, " + dogName + "!");
    }
}

/* CALCULATOR KATA */

function main(){
    var result = 0
    var operation = prompt("Wht operation would you like to do?(+, -, *, /)");
    var a = prompt("What is the first number?");
    a = parseInt(a);
    var b = prompt("What is the second number?");
    b = parseInt(b);
    switch(operation) {
        case "+" :
            result = add(a,b);
            break;
        case "-" :
            result = subtract(a,b);
            break;
        case "*" :
            result = multiply(a,b);
            break;
        case "/" :
            result = divide(a.b);
            break;
    }
    alert(a + operation + b + "=" + result);
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

/* ICE CREAM KATA */
/* Initialize Globals
 * Set a global variable myScoops = "Here's your cone with: "
 */
var myScoops = ": ";
/* FUNCTION main() 
 * initialize variable scoops, prompt user for "how many scoops (max 3)?"
 * if scoops is less than 4, call scoopLoop with argument scoops
 * otherwise display "oink oink" and call main again.
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main(){
    var scoops = prompt("How many scoops (max 3)?");
    if (scoops<4) scoopLoop(scoops);
    else {
        alert("oink oink");
        main();
    }
}
/* FUNCTION scoopLoop(scoops) 
 * start scoop at 1 and loop while scoop is less than or equal to scoops
 * inside the loop add nextScoop(scoop) to myScoops
 * after the loop's done, display "Here's your cone with " myScoops
 * @param: scoops (integer)
 * @return: none
 */
function scoopLoop(scoops){
    var scoop = 1
    while (scoop<=scoops) {
        myScoops += nextScoop(scoop);
        scoop += 1
    }
    myScoops = alert("Here's your cone with" + myScoops);
}
/* FUNCTION nextScoop(scoop)
 * initialize a variable called flavor, prompt for "Flavor for scoop number [scoop]"
 * @param: scoop (integer)
 * @return: flavor (string)
 */
function nextScoop(scoop) {
    var flavor = prompt("Flavor for scoop number " + scoop);
    return flavor
}

/* COLOR KATA */

/* Var Alert Prompt Conditional Switch 3 Functions */
var goodColor = false
/* FUNCTION main() 
 * create a variable called color and prompt the user for a primary or secondary color
 * if checkColor(color) says false, say "must be primary or secondary" and call main again.
 * otherwise, display "the complementary color of [color] is [complementaryColor(color)]"
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main(){
    var color = prompt("Primary or secondary color");
    checkColor(color);
    if (checkColor(color)==false) {
        alert("Must be primary or secondary");
        main();
    }
    else if (checkColor(color)==true) {
        alert("The complementary color of " + color + " is " + complementaryColor(color));
    }
}
/* FUNCTION checkColor (color)
 * set boolean goodColor to false
 * use a compound conditional (or) to check for primary
 * if it's a primary color, set goodColor to true
 * otherwise, use a compound conditional (or) to check for secondary
 * if it's a secondary color, set goodColor to true
 * return goodColor
 * @param: color (string)
 * @return: goodColor (boolean)
 */
function checkColor(color) {
    goodColor = false;
    switch(color) {
        case "red" :
            goodColor = true;
            break;
        case "blue" :
            goodColor = true;
            break;
        case "green" :
            goodColor = true;
            break;
        case "cyan" :
            goodColor = true;
            break;
        case "yellow" :
            goodColor = true;
            break;
        case "purple" :
            goodColor = true;
            break;
    }
    return goodColor;
}
/* FUNCTION complementaryColor(color)
 * create a variable called complement, set to ""
 * use a switch function and switch on color
 * (look at this: https://www.canva.com/colors/color-wheel)
 * in the switch, assign the complementary color to complement
 * @param: color (string)
 * @return: complement (string)
 */
function complementaryColor(color) {
    var complement = "";
    switch(color) {
        case "red" :
            complement = "cyan";
            break;
        case "blue" :
            complement = "yellow";
            break;
        case "green" :
            complement = "purple";
            break;
        case "cyan" :
            complement = "red";
            break;
        case "yellow" :
            complement = "blue";
            break;
        case "purple" :
            complement = "green";
            break;
    }
    return complement
}

/*Main will provide several dice and prompt the user to how many sides the dice should have
and the displays the result of the roll*/
/*Param(none)
Return(none)*/
var sides = 0;
var result = 0;
function main(){
    var again = true;
    while (again==true) {
        sides = prompt("how many sides on the dice?");
        execute();
        again = confirm("Roll again?");
        while (again==true){
            var same = confirm("Use same dice?");
            if (same==true) {
                execute();
            }
            else {
                sides = prompt("how many sides on the dice?");
                execute();
            }
            again = confirm("Roll again?");
        }
    }
}
/* creates a random number depending on how many sides are on the dice*/
/*Param(sides) 
Return(result)*/ 
function roll(sides){
    sides = parseInt(sides);
    result = Math.floor(Math.random()*sides)+1;
    return result;
}
/*displays the result */
function display() {
    if (sides==20) {
        if (result==20) alert("Natural 20, critical success!");
        else if (result==1) alert("Natural 1, critical failure!");
        else alert(result);
    }
    else alert(result);
}
/*executes the roll and display function*/
function execute(){
    roll(sides);
    display();
}