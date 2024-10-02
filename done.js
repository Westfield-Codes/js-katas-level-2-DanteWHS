/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */


/* Prompt */

/* Prompt with Conditional */


/* AGE KATA */

/* FUNCTION main() 
 * Facebook wants to check if you're 13, so they ask your birth year 
 * set age = "How old are you?"
 * then set born = asking "What year were you born?"
 * If myAge(age) is not equal to born, say, "Underaged", otherwise "Welcome!"
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main(){
    var age = prompt("How old are you?");
    var born = prompt("What year were you born?");
    if (myAge(age)!=born) alert("Underaged");
        else alert("Welcome!");
}

/* FUNCTION myAge(age)
 * define a function called myAge with number parameter age
 * Get thisYear using the date function https://www.w3schools.com/js/js_date_methods.asp
 * set birthYear as thisYear minus age and return that
 * @param: age (integer)
 * @return: year (year)
 */
function myAge(age){
    const d = new Date(2024);
    d.getFullYear();
    var birthYear = d - age;
    return birthYear;
}

/* ICE CREAM */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* PET */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */
