// Part I HTML + CSS 
// Rank 4


// Part II: JavaScript Reps


//================================================================================================================
// Easy Going
// Write a for loop that will log the numbers 1 through 20.
// 🔴 The commit message should read:
// "Easy Going answered"
//================================================================================================================

// for (let x = 1; x < 21;x++){
//     console.log(x)
// }
// console.log("Easy Going answered ")


//====================================================================================================================
// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.

// Hint: Think about the increment expression.

// 🔴 The commit message should read:
// "Get Even answered"
//============================================================================================================

// for (let x = 0; x <= 200;x++){
//         if( x % 2 === 0 ){
//             console.log(x + " is even")
//         } 
   
// }
// console.log("Get Even answered" )

//===============================================================================================================
// Fizz Buzz
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// 🔴 The commit message should read:
// "Fizz Buzz answered"
//=====================================================================================================================

// for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 ===0) {
//         console.log("Fizzbuzz")
//     } else if( i % 3 === 0 ){
//         console.log("Fizz")
//     } else if(i % 5 === 0 ){
//         console.log("Buzz")
//     } else{
//     console.log(i)
//     }
// }

//========================================================================================================
// Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// Give D'Art a second hometown by adding "Hawkins"
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// 🔴 The commit message should read:
// "Wild Wild Life answered"
//=========================================================================================================

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]


// part one 
// plantee[2]++
// console.log(plantee[2])

//part two 
// wolfy[3] = "Gotham City"
//     console.log(wolfy[3])

// //part three
// dart.push("Hawkins")
// console.log(dart)

// //part four 
// wolfy[0] = "Gameboy" 
//     console.log(wolfy)

//========================================================================================================
// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

// 🔴 The commit message should read:
// "Yell at the Ninja Turtles answered"
//============================================================================================================


// const array1 = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for (const element of array1) {
//   console.log(element.toUpperCase());
// }


//==============================================================================================================
// Methods, Revisited
// Here is a list of favMovies:

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic
// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like

// use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
// Use the method pop
// push"Guardians of the Galaxy"
// Reverse the array
// Use the shiftmethod
// unshift- what does it return?
// splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// store the value of your slicein a variable, console.log it - Thought question: what is going on here?
// console.log your final results
// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?

// 🔴 The commit message should read:
// "Methods Revisited answered"
//======================================================================================================================================

//part 0
console.log(favMovies[8])

// part 0B
// This sorted out the array in Alphabetic order

// part 1
sorted = favMovies.sort()
console.log(sorted)

//part 2

favMovies.pop()
console.log(favMovies)

//part 3
favMovies.push("Guardians of the Galaxy")

//part 4
favMovies.reverse()
    console.log(favMovies)
// part 5
favMovies.shift()
    console.log(favMovies)

//part 6 
favMovies.unshift()
    console.log(favMovies)
// It returns the same thing, we didn't add a value to it 

//part 7 
favMovies.splice(favMovies.indexOf('Django Unchained'),18,"Avatar");
    console.log(favMovies)
// part 8


//==========================================================================================================================
// Where is Waldo
// With the following multi-dimensional array
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert (hint look at the slice/splice method(s))
// Change "Neff" to "No One"
// Access and console.log "Waldo"
// 🔴 The commit message should read:
// "Where is Waldo answered"
//===============================================================================================================



//=============================================================================================================
// Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// Hint 1
// Hint 2
// Hint 3
// Hint 4
// Hint 5
// Hint 6
// Image of cat with funny quote about dot

// 🔴 The commit message should read:
// "Excited Kittens answered"
//=================================================================================================================




//===================================================================================================================
// Find the Median
// Find the median number in the following numsarray, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Expected output:
// => 15
// 🔴 The commit message should read:
// "Find the Median answered"
//================================================================================================================




//=========================================================================================================================
// Hungry for More?
// Choose one that you didn't get to solve in lab

// Fibonnacci (morning lab)
// Checkerboard (morning lab)
// TwoDArray (afternoon lab)
// Finish all 3 Lab Questions
// Return of the Closets


// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// Alien Attire
// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
// Dress Us Up
// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
// 🔴 The commit message should read:
// "Kristyn and Thom have their outfits ready for class - array practice"
//===================================================================================================================


//==================================================================================================================
// Dirty Laundry
// Continue looking at the closet arrays:

// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
// Inventory
// Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
// 🔴 The commit message should read:
// "Hungry for More: I tackled..."
//==============================================================================================================





// Technical Requirements
// A JavaScript file that runs without syntax errors (comment out stuff that doesn't work)
// At least one commit message per problem