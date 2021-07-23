import { WordFrequencyAnalyzer } from '../interfaces/wordfreqanalyzer';

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
}