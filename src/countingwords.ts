/*
Case "Counting words"
Main goal: Your task is to implement part of a text processing library.
Assumptions: 
- Word: To simplify, a word is represented by a sequence of one or more characters between „a‟ and „z‟ or between „A‟ and „Z‟). For example “agdfBh”.
Words containing characters, special characters and/or numbers are counted as words. For example "Welkom01!".
- Letter Case: When counting frequencies, we are interested in the case insensitive frequency (i.e. in the text “The sun shines over the lake”, 
the library should count 2 occurrences for any of the words “the” or “The” or “tHE” etc).
- Input Text: The input text contains words separated by various separator characters. Note that the characters from „a‟ and „z‟ and 
from „A‟ and „Z‟ can only appear within words.
All special characters are seen as separators. For example: 't-shirt' is counted as 2 words.
- Available Memory: There is enough memory to store the whole input text.
*/

// Step 2. CalculateFrequencyForWord should return the frequency of the specified word

interface WordFrequencyAnalyzer {
    //    calculateHighestFrequency(text: string): number;
    calculateFrequencyForWord(text: string, word: string): number;
    //    calculateMostFrequentNWords(text: string, n: number): WordFrequency[];
};

// Input of user.
const userInput = {
    text: 'Life, the universe and every-thing. From the third book in the five-volume Hitchhikers Guide to the Galaxy science fiction trilogy',
    word: 'the'
}

// English error messages.
const errorMessage = {
    forgotText: 'Error: You forgot to fill in the text',
    forgotWord: 'Error: You forgot to fill in the word',
    forgotTextWord: 'Error: You forgot to fill in the text and word',
    forgotNothing: 'Calculating!'
}

// Checks the user input and logs error messages based on the available user input. Exits program if one or more of the user inputs is not available.
function checkInput(text: string, word: string) {
    if (!text && !word) {
        console.log(errorMessage.forgotTextWord)
        process.exit(1)
    } else if (!text) {
        console.log(errorMessage.forgotText);
        process.exit(1)
    } else if (!word) {
        console.log(errorMessage.forgotWord);
        process.exit(1)
    } else {
        console.log(errorMessage.forgotNothing);
    }
}

checkInput(userInput.text, userInput.word)

// Convert string to array, duplicate words allowed
const arrayToCount = userInput.text.match(/(\w+)/g)
console.log(arrayToCount);

// Count exact matches of string const findWord in array
/* 
You can add ! (exclamation mark) after a property/variable name. 
This feature is called “Non-null assertion operator“, basically it means that when you add the exclamation 
mark after a property/value, you are telling TypeScript that you are certain that value is not null or undefined.
*/
let total = 0

for (let i = 0; i < arrayToCount!.length; i++) {
    if (arrayToCount![i] === userInput.word) {
        console.log(`${arrayToCount![i]} <- here it is`);
        total += 1;
        console.log(`Total so far: ${total}`);
    }
    else {
        console.log(`${arrayToCount![i]} <- x`);
    }
}

console.log(`Total count of the word '${userInput.word}' is: ${total}`);