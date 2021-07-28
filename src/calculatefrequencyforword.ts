// CalculateFrequencyForWord should return the frequency of the specified word

import { WordFrequencyAnalyzerImpl } from './classes/wordfreqanalyzer';

console.log(WordFrequencyAnalyzerImpl)

// Input of user.
const text1 = 'Life, the universe and everything. From the third book in the five-volume Hitchhikers Guide to the Galaxy science fiction trilogy';
const text2 = 'Living life to the fullest life';

const findWord1 = 'the'
const findWord2 = 'life'

// Create an object whose type is WordFrequencyAnalyzerImpl.
let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

// Logging.
console.log(`Word frequency of the word '${findWord1}' in text 1: ${wordFrequencyInThisText.calculateFrequencyForWord(text1, findWord1)}`);
console.log(`Word frequency of the word '${findWord2}' in text 2: ${wordFrequencyInThisText.calculateFrequencyForWord(text2, findWord2)}`);