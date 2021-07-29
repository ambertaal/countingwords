export interface WordFrequency {
    getWord(): string;
    getFrequency(): number;
};

/*
Assumptions:
A word is represented by a sequence of one or more characters between „a‟ and „z‟ or between „A‟ and „Z‟. 
When counting frequencies, we are interested in the case insensitive frequency.
Input Text: The input text contains words separated by various separator characters. 
*/
export interface WordFrequencyAnalyzer {
    calculateHighestFrequency(text: string): number;
    calculateFrequencyForWord(text: string, word: string): number;
    /*
    If several words have the same frequency, this method should return them in ascendant alphabetical order.
    All the words returned in lower case. 
    */
    calculateMostFrequentNWords(text: string, n: number): WordFrequency[];
};