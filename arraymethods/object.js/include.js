//The .includes() method in JavaScript is used to check if an array contains a specific value. 
// It returns a boolean (true or false).

//array.includes(valueToFind, fromIndex)

let items = ["a", "b", "c", "a"];
console.log(items.includes("a", 3));  // true (search starts at index 2)
console.log(items.includes("b",2 ));  // false
