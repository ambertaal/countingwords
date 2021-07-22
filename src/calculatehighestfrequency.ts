// Step 1. Calculate highest frequency
import { WordFrequencyAnalyzerImpl } from './classes/wordfreqanalyzer';

console.log(WordFrequencyAnalyzerImpl)

// Input of user.
const sentence1 = 'My name is Bond, James Bond';
const sentence2 = 'I will be back, back to back';


// Create an object whose type is WordFrequencyAnalyzerImpl.
let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

// Logging.
console.log(`Highest frequency text 1: ${wordFrequencyInThisText.calculateHighestFrequency(sentence1)}`);
console.log(`Highest frequency text 2: ${wordFrequencyInThisText.calculateHighestFrequency(sentence2)}`);