// What does it mean to "loop over" or "iterate over" an array?

// It means that we go and dig into each item in our array to check it for something or do something with each item.

// IRL Example: A teacher has an array of all his students and wants to print off everyones' names.

// First we are going to declare our variable. Students is the name of our array and our variable.

var students = ["sunny", "danny", "waylon", "emily"]

//now we are going to make our for loop

// var i = 0: We are setting the first index to 0

// i < students.length: This will continue to run our for loop until this statement it no longer true. WHich in this case, it would stop being true until the end of the array.

// i++: This means that we are going to increse by 1 every iteration

// console.log(students[i]): We are going to log to the console the names of everyone in the students array. We set before that i is 0. So the first time through the loop i = 0. But because we have the i++, the sectond time [i] will equal 1, then 2, then 3, until we reach the end of the loop.

for (var i = 0; i < students.length; i++) {
  console.log(students[i])
}
