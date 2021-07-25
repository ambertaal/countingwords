// Step 3. Calculate most frequent N words
import { WordFrequencyAnalyzerImpl } from './classes/wordfreqanalyzer';
import { WordFrequencyImpl } from './classes/wordfreqanalyzer';

console.log(WordFrequencyAnalyzerImpl);
console.log(WordFrequencyImpl);

// Input of user.
const sentence1 = 'The sun shines over the lake';
const sentence2 = 'The way 123 to get start-ed is to 123 quit talk_ing and begin 123 doi!ng. -Walt Disney';
const sentence3 = 'A a a b b c';
const sentence4 = '';

const n1 = 3;
const n2 = 4;
const n3 = 2;
const n4 = 3;

// Create an object whose type is WordFrequencyAnalyzerImpl.
let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl();

// Logging.
console.log(wordFrequencyInThisText.calculateMostFrequentNWords(sentence1, n1));
console.log(wordFrequencyInThisText.calculateMostFrequentNWords(sentence2, n2));
console.log(wordFrequencyInThisText.calculateMostFrequentNWords(sentence3, n3));
console.log(wordFrequencyInThisText.calculateMostFrequentNWords(sentence4, n4));