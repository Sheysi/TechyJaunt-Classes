// scores = [70, 85, 61, 90, 54];
// console.log(scores);
// // pop function - it removes the last element in an array
// lastScores = scores.pop();
// // console.log(scores);
// // push function - adds an element to the back of an array
// scores.push(32);
// console.log(scores);
// // shift function - removes the first element in an array
// firstScore = scores.shift();
// console.log(scores);
// // console.log(firstScore);
// // unshift function - adds an element to the front of the array
// scores.unshift(50);
// console.log(scores);

// strings
// time = 9
// statement1 = "Jude goes to work at " + time + " AM";  // concatenation
// statement2 = `Mike goes to work at ${time} AM`;  // interpolation
// // console.log(statement1);
// // console.log(statement2);

// statement3 = 'My car is "large" like an elephant';
// statement4 = "My car is \"large\" like a dinosaur";
// // statement4 = 'My car is \'large\' like a dinosaur';
// console.log(statement3);
// console.log(statement4);

// Logical Operators
let a = 3;
let b = 6;
let c = 8;
// console.log(a > b);  // false
// console.log(a < b);  //true
// console.log(a <= c);  //true
// console.log(b >= c);  //false
// console.log(a == b);  // false
// console.log(a != b);  // true
// console.log(a == "3");  //true
// // This shouldn't be since a is an integer and "3" is a string
// console.log(a === "3");  // false
// // The triple = goes the extra mile to check if the data types are the same
// console.log(a > b && a < c);  // false
// console.log(a > b || a < c);  // true



// If Statements
if (a > b) {
    console.log("Person A is taller");
}
else if (a == b) {
    console.log("Person A and B are equal in height");
} else {
    console.log("Person A is shorter");
}
