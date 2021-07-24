import { WordFrequencyAnalyzer } from '../interfaces/wordfreqanalyzer';
import { WordFrequency } from '../interfaces/wordfreqanalyzer';

// Created class with functions
export class WordFrequencyImpl implements WordFrequency {
    word: string;
    n: number;
    constructor(word: string, n: number) {
        this.word = word;
        this.n = n;
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
        let total = 0;
        const array = text.match(/([A-Za-z]+)/g)
        if (array === null) {
            return 0;
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i].toLowerCase() === word.toLowerCase()) {
                total += 1;
            }
        }
        return total;
    }
    calculateHighestFrequency(text: string): number {
        let highestFreq = 0;
        const arrayHighestFreq = text.match(/([A-Za-z]+)/g);
        if (arrayHighestFreq === null) {
            return 0;
        }
        for (let i = 0; i < arrayHighestFreq.length; i++) {
            let currentFreq = this.calculateFrequencyForWord(text, arrayHighestFreq[i]);
            if (currentFreq > highestFreq) {
                highestFreq = currentFreq;
            }
        }
        return highestFreq;
    }
    calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
        // Convert string to array.
        const arrayMostFreq = text.match(/([A-Za-z]+)/g);
        if (arrayMostFreq === null) {
            return [];
        }

        // String to lowercase.
        const lowercaseArrayMostFreq = arrayMostFreq.map(array => array.toLowerCase());
        console.log(lowercaseArrayMostFreq);

        // Count each word in the array and store frequency in array.
        let newArray: Array<WordFrequencyImpl> = []
        for (let i = 0; i < lowercaseArrayMostFreq.length; i++) {
            let word = lowercaseArrayMostFreq[i];
            let freq = this.calculateFrequencyForWord(text, lowercaseArrayMostFreq[i]);
            newArray.push(new WordFrequencyImpl(word, freq));
        }

        console.log(newArray);

        // Sort by ascendant alfabetically order.
        newArray.sort(function (a, b) {
            let wordA = a.word.toLowerCase();
            let wordB = b.word.toLowerCase();
            if (wordA < wordB) {
                return -1;
            }
            // words must be equal.
            return 0;
        });

        // Sort by descending frequency [100-0] order.
        newArray.sort(function (a, b) {
            return b.n - a.n;
        });
        console.log(newArray);

        // Remove all duplicates from an array of objects.
        const ids = newArray.map(o => o.word);
        const UniqueArray = newArray.filter(({ word }, index) => !ids.includes(word, index + 1));

        console.log(UniqueArray);

        // Get most frequent 'n' words.
        let filteredUniqueArray = UniqueArray.filter((UniqueArray, idx) => idx < n)
        console.log(filteredUniqueArray);

        return [];
    }
}
