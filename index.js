// Qus 1 -
function calculateDifference(a, b) {
    return a - b;
}
console.log("The difference between the first and second arguments is:", calculateDifference(20, 5));

// Qus-2 -
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("Is Odd:", isOdd(11));

// Qus-3 - 
function findMin(numbers) {
    return numbers.sort((a, b) => a - b)[0];
}
console.log("Smallest Number in the Array is:", findMin([20, 7, 30, 50]));

// Qus-4 -
function filterEvenNumbers(numbers){
    return numbers.filter(num => num % 2 === 0)
}
console.log("Even numbers are:", filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// Qus-5 -
function sortArrayDescending(numbers){
    return numbers.sort((a, b) => b - a);
}
console.log("Sorted in Descending order:", sortArrayDescending([20, 7, 30, 50]));

// Qus-6 -
function lowercaseFirstLetter(string){
    return string[0].toLowerCase() + string.substring(1);
}
console.log("The first letter converted to lowercase:", lowercaseFirstLetter("Ostad"));

// Qus-7 -
function findAverage(numbers){
    const sum = numbers.reduce((total, currentValue) => total + currentValue, 0);
    return sum / numbers.length;
}
console.log('Average is:', findAverage([40, 50, 60]))

// Qus-8 -
function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}
console.log("Is this Leap Year? :", isLeapYear(1996));