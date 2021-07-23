import { WordFrequencyAnalyzer } from '../interfaces/wordfreqanalyzer';
import { WordFrequency } from '../interfaces/wordfreqanalyzer';

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
        const arrayMostFreq = text.match(/([A-Za-z]+)/g);
        if (arrayMostFreq === null) {
            return [];
        }
        console.log(arrayMostFreq);

        let newArray: Array<WordFrequencyImpl> = []
        for (let i = 0; i < arrayMostFreq.length; i++) {
            let word = arrayMostFreq[i];
            let freq = this.calculateFrequencyForWord(text, arrayMostFreq[i]);
            newArray.push(new WordFrequencyImpl(word, freq));
        }

        // Sort by alfabet ascendant.
        newArray.sort(function (a, b) {
            let wordA = a.word.toLowerCase();
            let wordB = b.word.toLowerCase();
            if (wordA < wordB) {
                return -1;
            }
            // words must be equal.
            return 0;
        });

        // Sort by freq descending.
        newArray.sort(function (a, b) {
            return b.n - a.n;
        });
        console.log(newArray);

        // Get most frequent 'n' words.
        let uniqueArray = newArray.filter((newArray, idx) => idx < n)
        console.log(uniqueArray);
        return [];
    }

}

