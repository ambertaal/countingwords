interface WordFrequency {
    getWord(): string;
    getFrequency(): number;
};

export interface WordFrequencyAnalyzer {
    //    calculateHighestFrequency(text: string): number;
    calculateFrequencyForWord(text: string, word: string): number;
    //    calculateMostFrequentNWords(text: string, n: number): WordFrequency[];
};

// Because of converting to js, below is needed. 
export function Onzin() {

};