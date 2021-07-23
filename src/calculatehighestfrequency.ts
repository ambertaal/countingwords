// Step 1. Calculate highest frequency
import { WordFrequencyAnalyzerImpl } from './classes/wordfreqanalyzer';

console.log(WordFrequencyAnalyzerImpl)

// Input of user.
const sentence1 = 'My name is Bond, James Bond';
const sentence2 = 'I will be back, back to back';
const sentence3 = 'A a a b c c';
const sentence4 = 'a';

// Create an object whose type is WordFrequencyAnalyzerImpl.
let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

// Logging.
console.log(`Highest frequency text 1: ${wordFrequencyInThisText.calculateHighestFrequency(sentence1)}`);
console.log(`Highest frequency text 2: ${wordFrequencyInThisText.calculateHighestFrequency(sentence2)}`);
console.log(`Highest frequency text 3: ${wordFrequencyInThisText.calculateHighestFrequency(sentence3)}`);
console.log(`Highest frequency text 4: ${wordFrequencyInThisText.calculateHighestFrequency(sentence4)}`);