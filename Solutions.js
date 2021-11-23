// Solutions

// Day 0: Hello, World.

function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString)
}
    //----------------------------------------------------------------------------------------------------------------

// Day 1: Data Types

// Declare second integer, double, and String variables.
let i1;
let d1;
let s1;
    // Read and save an integer, double, and String to your variables.
i1 = parseFloat(readLine());
d1 = parseFloat(readLine());
s1 = readLine();

    // Print the sum of both integer variables on a new line.
    console.log(Number(i + i1))
    
    // Print the sum of the double variables on a new line.
     d1 = (Number(d + d1)).toFixed(1)
     console.log(d1)
    // Concatenate and print the String variables on a new line
    
    // The 's' variable above should be printed first.
    console.log(s + s1)

    //----------------------------------------------------------------------------------------------------------------
    
    // Day 2: Operators

    function solve(meal_cost, tip_percent, tax_percent) {
        // Write your code here
    let tip_price = (tip_percent / 100) * meal_cost;
    let tax_price = (tax_percent / 100) * meal_cost;
    let sum = Math.round(meal_cost + tip_price + tax_price)
    console.log(sum)
    }

    //----------------------------------------------------------------------------------------------------------------

    // Day 3: Intro to Conditional Statements
    function main() {
        const N = parseInt(readLine().trim(), 10);
        if(N%2 != 0) {
            console.log("Weird");
    }else if (N%2 == 0 && (N >= 2 && N <= 5 )) {
        console.log("Not Weird");
    }else if (N%2 == 0 && (N >= 6 && N <= 20)) {
        console.log("Weird");
    }else if (N%2 == 0 && (N > 20)) {
        console.log("Not Weird")
    }
    }

   //----------------------------------------------------------------------------------------------------------------

//    Day 4: Class vs. Instance

  function Person(initialAge){
    // Add some more code to run some checks on initialAge

   if (initialAge < 0) {
       age = 0;
       console.log("Age is not valid, setting age to 0.")
   }else if (initialAge > 0) {
        age = initialAge;
    }
    
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    if (age < 13) {
        console.log("You are young.")
    }else if (13 <= age && age < 18) {
        console.log ("You are a teenager.") 
    } else  console.log("You are old.")
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
          age += 1
   };
}
