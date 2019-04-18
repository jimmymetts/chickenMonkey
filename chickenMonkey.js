//console.log("test")



for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    
    if (currentNumber % 7 === 0  && currentNumber % 5 === 0 ) {
        console.log("ChickenMonkey")
     }
    
    else if (currentNumber % 5 === 0 ) {
        console.log("Chicken")
     }
     else if (currentNumber % 7 === 0 ) {
        console.log("Monkey")
     }
    
    else if (currentNumber % 1 === 0) {
        console.log(currentNumber) // Only 2, 4, 6 will appear
    }
 
}