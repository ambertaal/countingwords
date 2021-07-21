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

import { WordFrequencyAnalyzerImpl } from './classes/wordfreqanalyzer';

console.log(WordFrequencyAnalyzerImpl)

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

// Input of user.
const sentence1 = 'Life, the universe and everything. From the third book in the five-volume Hitchhikers Guide to the Galaxy science fiction trilogy';
const sentence2 = '';

const findWord1 = 'the'
const findWord2 = 'life'

// English error messages.
const errorMessage = {
    forgotText: 'Error: You forgot to fill in the text',
    forgotWord: 'Error: You forgot to fill in the word',
    forgotTextWord: 'Error: You forgot to fill in the text and word',
    forgotNothing: 'Calculating!'
}

// Create an object whose type is WordInText.
let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

// Logging.
console.log(`Word frequency of the word '${findWord1}' in text 1: ${wordFrequencyInThisText.calculateFrequencyForWord(sentence1, findWord1)}`);
console.log(`Word frequency of the word '${findWord2}' in text 2: ${wordFrequencyInThisText.calculateFrequencyForWord(sentence2, findWord2)}`);