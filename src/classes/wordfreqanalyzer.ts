import { WordFrequencyAnalyzer } from '../interfaces/wordfreqanalyzer';
import { WordFrequency } from '../interfaces/wordfreqanalyzer';

// Created class with functions
export class WordFrequencyImpl implements WordFrequency {
    word: string;
    n: number;
    constructor(woord: string, nummer: number) {
        this.word = woord;
        this.n = nummer;
    }
    getWord(): string {
        return this.word;
    }
    getFrequency(): number {
        return this.n;
    }
}

// Created class with a function including a for loop to analyze multiple texts.
export class WordFrequencyAnalyzerImpl implements WordFrequencyAnalyzer {
    calculateFrequencyForWord(text: string, word: string): number {
        const wordsOfText = text.match(/[A-Za-z]+/g)
        if (wordsOfText === null) {
            return 0;
        }
        let total = 0;
        for (let i = 0; i < wordsOfText.length; i++) {
            if (wordsOfText[i].toLowerCase() === word.toLowerCase()) {
                total += 1;
            }
        }
        return total;
    }
    calculateHighestFrequency(text: string): number {
        const wordsOfText = text.match(/[A-Za-z]+/g);
        if (wordsOfText === null) {
            return 0;
        }
        let highest = 0;
        for (let i = 0; i < wordsOfText.length; i++) {
            let currentFreq = this.calculateFrequencyForWord(text, wordsOfText[i]);
            if (currentFreq > highest) {
                highest = currentFreq;
            }
        }
        return highest;
    }
    calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
        // Convert the string to lowercase array with words of text.
        const wordsOfText = text.match(/[A-Za-z]+/g);
        if (wordsOfText === null) {
            return [];
        }
        const lowercaseArray = wordsOfText.map(word => word.toLowerCase());

        // Count each word in the array and store frequency in array.
        const arrayFreq: Array<WordFrequencyImpl> = lowercaseArray.map(
            word => new WordFrequencyImpl(word, this.calculateFrequencyForWord(text, word))
        );

        // Sort by ascendant alfabetically order.
        arrayFreq.sort(function (a, b) {
            let wordA = a.word.toLowerCase();
            let wordB = b.word.toLowerCase();
            if (wordA < wordB) {
                return -1;
            }
            if (wordA > wordB) {
                return 1;
            }
            // words must be equal.
            return 0;
        });

        // Sort by descending frequency [100-0] order.
        arrayFreq.sort(function (a, b) {
            return b.n - a.n;
        });

        // Remove all duplicates from the sorted array of objects.
        const UniqueArrayFreq: Array<WordFrequencyImpl> = []

        for (let i = 0; i < arrayFreq.length; i++) {
            if (i==0 || arrayFreq[i].word != arrayFreq[i-1].word) {
                UniqueArrayFreq.push(arrayFreq[i]);
            }
        }

        // Get most frequent 'n' words.
        const filteredUniqueArrayFreq = UniqueArrayFreq.slice(0, n);

        return filteredUniqueArrayFreq;
    }
}