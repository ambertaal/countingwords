// Calculate most frequent N words
import { WordFrequencyAnalyzerImpl } from './classes/wordfreqanalyzer';
import { WordFrequencyImpl } from './classes/wordfreqanalyzer';

console.log(WordFrequencyAnalyzerImpl);
console.log(WordFrequencyImpl);

// Input of user.
const text1 = 'The sun shines over the lake';
const text2 = 'The way 123 to get start-ed is to 123 quit talk_ing and begin 123 doi!ng. -Walt Disney';
const text3 = 'A a a b b c';
const text4 = '';

const n1 = 3;
const n2 = 4;
const n3 = 2;
const n4 = 3;

// Create an object whose type is WordFrequencyAnalyzerImpl.
let wordFrequencyAnalyzer = new WordFrequencyAnalyzerImpl();

// Logging.
console.log(wordFrequencyAnalyzer.calculateMostFrequentNWords(text1, n1));
console.log(wordFrequencyAnalyzer.calculateMostFrequentNWords(text2, n2));
console.log(wordFrequencyAnalyzer.calculateMostFrequentNWords(text3, n3));
console.log(wordFrequencyAnalyzer.calculateMostFrequentNWords(text4, n4));