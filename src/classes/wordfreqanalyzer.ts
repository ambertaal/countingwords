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
        let highest = 0;
        const array = text.match(/([A-Za-z]+)/g);
        if (array === null) {
            return 0;
        }
        for (let i = 0; i < array.length; i++) {
            let currentFreq = this.calculateFrequencyForWord(text, array[i]);
            if (currentFreq > highest) {
                highest = currentFreq;
            }
        }
        return highest;
    }
    calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
        const array = text.match(/([A-Za-z]+)/g);
        if (array === null) {
            return [];
        }

        // String to lowercase.
        const lowercaseArray = array.map(word => word.toLowerCase());

        // Count each word in the array and store frequency in array.
        let arrayFreq: Array<WordFrequencyImpl> = []
        for (let i = 0; i < lowercaseArray.length; i++) {
            let word = lowercaseArray[i];
            let freq = this.calculateFrequencyForWord(text, lowercaseArray[i]);
            arrayFreq.push(new WordFrequencyImpl(word, freq));
        }

        // Sort by ascendant alfabetically order.
        arrayFreq.sort(function (a, b) {
            let wordA = a.word.toLowerCase();
            let wordB = b.word.toLowerCase();
            if (wordA < wordB) {
                return -1;
            }
            // words must be equal.
            return 0;
        });

        // Sort by descending frequency [100-0] order.
        arrayFreq.sort(function (a, b) {
            return b.n - a.n;
        });

        // Remove all duplicates from an array of objects.
        let UniqueArrayFreq: Array<WordFrequencyImpl> = []

        for (let i = 0; i < arrayFreq.length; i++) {
            if (i==0 || arrayFreq[i].word != arrayFreq[i-1].word) {
                UniqueArrayFreq.push(arrayFreq[i]);
            }
        }

        // Get most frequent 'n' words.
        let filteredUniqueArrayFreq = UniqueArrayFreq.slice(0, n);

        return filteredUniqueArrayFreq;
    }
}
