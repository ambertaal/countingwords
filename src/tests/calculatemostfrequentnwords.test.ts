import { WordFrequencyAnalyzerImpl } from '../classes/wordfreqanalyzer';

test('If several words have the same frequency, it should return them in ascendant alphabetical order', () => {
    const text1 = 'The sun shines over the lake';
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

    const frequentNWords = wordFrequencyInThisText.calculateMostFrequentNWords(text1, 3);

    expect(frequentNWords).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                n: 2,
                word: 'the'
            }),
            expect.objectContaining({
                n: 1,
                word: 'lake'
            }),
            expect.objectContaining({
                n: 1,
                word: 'over'
            })
        ])
    )
});

test('Most frequent n words, without parameter', () => {
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

    const frequentNWords = wordFrequencyInThisText.calculateMostFrequentNWords('', 3);

    expect(frequentNWords).toEqual([])
});

test('When counting frequencies, it is a case insensitive frequency', () => {
    const text1 = 'The MOON shines moon light over the Moon lake';
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

    const frequentNWords = wordFrequencyInThisText.calculateMostFrequentNWords(text1, 3);

    expect(frequentNWords).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                n: 3,
                word: 'moon'
            }),
            expect.objectContaining({
                n: 2,
                word: 'the'
            }),
            expect.objectContaining({
                n: 1,
                word: 'lake'
            })
        ])
    )
});

test('A word containing only numbers is not counted', () => {
    const text1 = 'The 111 MOON shines 111 moon light over the 111 Moon lake';
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

    const frequentNWords = wordFrequencyInThisText.calculateMostFrequentNWords(text1, 3);

    expect(frequentNWords).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                n: 3,
                word: 'moon'
            }),
            expect.objectContaining({
                n: 2,
                word: 'the'
            }),
            expect.objectContaining({
                n: 1,
                word: 'lake'
            })
        ])
    )
});

test('A word that is part of a longer word, is counted as a seperate word', () => {
    const text1 = 'My name is bond, James Bond. He is bonding said James Bond';
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

    const frequentNWords = wordFrequencyInThisText.calculateMostFrequentNWords(text1, 3);

    expect(frequentNWords).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                n: 3,
                word: 'bond'
            }),
            expect.objectContaining({
                n: 2,
                word: 'is'
            }),
            expect.objectContaining({
                n: 2,
                word: 'james'
            })
        ])
    )
});

test('When there is only 1 word and n > 1', () => {
    const text1 = 'Hello';
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

    const frequentNWords = wordFrequencyInThisText.calculateMostFrequentNWords(text1, 3);

    expect(frequentNWords).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                n: 1,
                word: 'hello'
            })
        ])
    )
});

test('The input text contains words separated by various separator characters.', () => {
    const text1 = 'Hello, my first-name is James, second-name Bo_nd. Jam!sBond';
    let wordFrequencyInThisText = new WordFrequencyAnalyzerImpl()

    const frequentNWords = wordFrequencyInThisText.calculateMostFrequentNWords(text1, 3);

    expect(frequentNWords).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                n: 2,
                word: 'name'
            }),
            expect.objectContaining({
                n: 1,
                word: 'bo'
            }),
            expect.objectContaining({
                n: 1,
                word: 'first'
            })
        ])
    )
});