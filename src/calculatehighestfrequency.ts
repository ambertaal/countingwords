// Calculate highest frequency
import { WordFrequencyAnalyzerImpl } from './classes/wordfreqanalyzer';

console.log(WordFrequencyAnalyzerImpl)

// Input of user.
const text1 = 'My name is Bond, James Bond';
const text2 = 'I will be back, back to back';
const text3 = 'A a a b c c';
const text4 = 'a';

// Create an object whose type is WordFrequencyAnalyzerImpl.
let wordFrequencyAnalyzer = new WordFrequencyAnalyzerImpl()

// Logging.
console.log(`Highest frequency text 1: ${wordFrequencyAnalyzer.calculateHighestFrequency(text1)}`);
console.log(`Highest frequency text 2: ${wordFrequencyAnalyzer.calculateHighestFrequency(text2)}`);
console.log(`Highest frequency text 3: ${wordFrequencyAnalyzer.calculateHighestFrequency(text3)}`);
console.log(`Highest frequency text 4: ${wordFrequencyAnalyzer.calculateHighestFrequency(text4)}`);