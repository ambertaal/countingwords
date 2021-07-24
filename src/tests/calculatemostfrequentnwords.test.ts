import { WordFrequencyAnalyzerImpl } from '../classes/wordfreqanalyzer';

test('Most frequent n words', () => {
    const sentence1 = 'The sun shines over the lake';
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

    const frequentNWords = wordFrequencyInThisText.calculateMostFrequentNWords(sentence1, 3);

    expect(frequentNWords).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                n: 2,
                word: 'the'
            })
        ])
    )
});
