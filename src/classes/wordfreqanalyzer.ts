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
        const arrayHighestFreq = text.match(/([A-Za-z]+)/g);
        if (arrayHighestFreq === null) {
            return 0;
        }
        let newArray: Array<number> = []
        for (let i = 0; i < arrayHighestFreq.length; i++) {
            newArray.push(this.calculateFrequencyForWord(text, arrayHighestFreq[i]));
        }
        newArray.sort(function (a, b) { return b - a });
        return newArray[0];
    }
}