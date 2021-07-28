import { WordFrequencyAnalyzerImpl } from '../classes/wordfreqanalyzer';

test('Word frequency analyzer example', () => {
    const text = 'Life, the universe and everything. From the third book in the five-volume Hitchhikers Guide to the Galaxy science fiction trilogy';
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

    const freq = wordFrequencyInThisText.calculateFrequencyForWord(text, 'the')
    expect(freq).toBe(4);
});

test('Word frequency analyzer, without parameters', () => {
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()
    const freq = wordFrequencyInThisText.calculateFrequencyForWord('', 'the')
    expect(freq).toBe(0);
});

test('A word containing only numbers and special characters', () => {
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()
    const freq = wordFrequencyInThisText.calculateFrequencyForWord('The alien said 123', '123')
    expect(freq).toBe(0);
});

test('When counting frequencies, it is a case insensitive frequency', () => {
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()
    const freq = wordFrequencyInThisText.calculateFrequencyForWord('And aNd and AND lake', 'and')
    expect(freq).toBe(4);
});

test('A word that is part of a longer word', () => {
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()
    const freq = wordFrequencyInThisText.calculateFrequencyForWord('A cat and a dog', 'a')
    expect(freq).toBe(2);
});