import { WordFrequencyAnalyzer } from '../interfaces/wordfreqanalyzer';

// Created class with a function including a for loop to analyze multiple texts.
export class WordFrequencyAnalyzerImpl implements WordFrequencyAnalyzer {
    calculateFrequencyForWord(text: string, word: string): number {
        let total = 0;
        const array = text.match(/(\w+)/g)
        if (array === null) {
            return 0;
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] === word) {
                console.log(`${array[i]} <- here it is`);
                total += 1;
                console.log(`Total so far: ${total}`);
            }
            else {
                console.log(`${array[i]} <- x`);
            }
        }
        return total;
    }
}