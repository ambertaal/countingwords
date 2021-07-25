import { WordFrequencyAnalyzerImpl } from '../classes/wordfreqanalyzer';

test('Highest frequency example', () => {
    const sentence1 = 'My name is Bond, James Bond';
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()
    const highestFreq = wordFrequencyInThisText.calculateHighestFrequency(sentence1)
    expect(highestFreq).toBe(2);
});

test('Highest frequency example, without parameter', () => {
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()
    const highestFreq = wordFrequencyInThisText.calculateHighestFrequency('')
    expect(highestFreq).toBe(0);
});

test('A word containing only numbers is not counted', () => {
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()
    const highestFreq = wordFrequencyInThisText.calculateHighestFrequency('My name is 42, James 42')
    expect(highestFreq).toBe(1);
});

test('When counting frequencies, it is a case insensitive frequency', () => {
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()
    const highestFreq = wordFrequencyInThisText.calculateHighestFrequency('My name is bond, James BOND; said James bOnd.')
    expect(highestFreq).toBe(3);
});

test('A word that is part of a longer word, is counted as a seperate word', () => {
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()
    const highestFreq = wordFrequencyInThisText.calculateHighestFrequency('My name is bond, James Bond. He is bonding said James Bond.')
    expect(highestFreq).toBe(3);
});

test('When there is only 1 word', () => {
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()
    const highestFreq = wordFrequencyInThisText.calculateHighestFrequency('a')
    expect(highestFreq).toBe(1);
});