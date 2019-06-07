// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";
var test = "EvvvEBEExxxxEE"
// 1. Write the code that returns 'B' from mantra.
const findB=(word)=>{
    let wordLower = word.toLowerCase("")
    for(let i=0;i<wordLower.length;i++){
        if(wordLower.substr(i,1)==="b"){
            return word.substr(i,1)
        }
    }
    
}
console.log(findB(test))
console.log(findB(mantra))

// 2. Write the code that determines if there is a 'x' in mantra.
const findX=(word)=>{
    let catchAll=true
    let wordLower = word.toLowerCase("")
    for(let i=0;i<wordLower.length;i++){
        if(wordLower.substr(i,1)==="x"){
            catchAll=false
            return word.substr(i,1)
        }
    }if(catchAll===true){
        return "There is no x"
    }else{
        return"error"
    }
    
}
console.log(findX(test))
console.log(findX(mantra))
// 3. Write the code that determines if there is a 'v' in mantra.
const findV=(word)=>{
    let catchAll=true
    let wordLower = word.toLowerCase("")
    for(let i=0;i<wordLower.length;i++){
        if(wordLower.substr(i,1)==="v"){
            catchAll=false
            return word.substr(i,1)
        }
    }if(catchAll===true){
        return "There is no v"
    }else{
        return"error"
    }
    
}
console.log(findV(test))
console.log(findV(mantra))
// Stretch: Write the code that returns the position of 'v' in mantra.
const findVStretch=(word)=>{
    let wordLower = word.toLowerCase("")
    for(let i=0;i<wordLower.length;i++){
        if(wordLower.substr(i,1)==="v"){
            return `${word.substr(i,1)} is number ${i} in the string`
        }
    }
    
}

console.log(findVStretch(test))
console.log(findVStretch(mantra))


// Consider the following statement:

var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost=false
var imFrustrated=false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
for(let i=0;i<mantra.length;i++){
    console.log(mantra.substr(i,1))
    }

// Stretch: Using a while loop.
var myWhileLoop= -1
while(myWhileLoop < mantra.length){
    myWhileLoop++
    console.log(mantra.substr(myWhileLoop,1))
}

// Super Stretch: Using forEach().
var mantraAcc=mantra.split("")
mantraAcc.forEach(function(letter){
    console.log(letter)
})

// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

var noVowels=(msg)=>{
    let newMsg=""

    if(typeof msg ==="string"){
        let lowerMsg=msg.toLocaleLowerCase()
        for(let i=0;i<lowerMsg.length;i++){
            if(lowerMsg.substr(i,1) !== "a"&&lowerMsg.substr(i,1) !=="e"&&lowerMsg.substr(i,1) !=="i"&&lowerMsg.substr(i,1) !=="o"&&lowerMsg.substr(i,1) !=="u"){
            newMsg=newMsg+(lowerMsg.substr(i,1))
            }
        }
        return newMsg
    }else{
        return `Please enter a string and not a ${typeof msg}`
    }
}
console.log(noVowels(message))
console.log(noVowels(1234))


// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
const catsOnly=(arr)=>{
  let newArr=[]
  for(let i=0;i<arr.length;i++){
      if(arr[i].animal ==='cat'){
          newArr.push(arr[i])
      }
  }
  return newArr
}
console.log(catsOnly(toonimals))
