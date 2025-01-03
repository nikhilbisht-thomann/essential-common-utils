import {
    generateRandomArrayIndex,
    trimAndRemoveSpaces,
    extractUrlsFromText,
    trimAndRemoveDoubleSpaces,
    trimAndRemoveUnicodeCharacter,
    normalizeWhitespace,
    splitTextAndGetPart,
    normalizeWhitespacesAndRemoveSoftHyphen,
    convertToEuropeFormat,
    getPascalCaseText,
    getCamelCaseText,
    getExecutionTime,
    extractTextOnly,
    trimToTwoDecimalPlaces,
    capitalizeFirstWord,
    getMultipleUniqueIndexes,
    getRandomString,
} from '../src/Common';

test('generateRandomArrayIndex should return a number within range', () => {
    const arrayLength = 10;
    const index = generateRandomArrayIndex(arrayLength);

    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(arrayLength);
});

test('trimAndRemoveSpaces should remove spaces from a string', () => {
    expect(trimAndRemoveSpaces(' hello world ')).toBe('helloworld');
});

test('extractUrlsFromText should extract URLs from text', () => {
    const text = 'Check out https://example.com and http://test.com';
    const urls = extractUrlsFromText(text);

    expect(urls).toEqual(['https://example.com', 'http://test.com']);
});

test('trimAndRemoveDoubleSpaces should remove double spaces from a string', () => {
    expect(trimAndRemoveDoubleSpaces('hello  world')).toBe('hello world');
    expect(trimAndRemoveDoubleSpaces('  hello  world  ')).toBe('hello world');
});

test('trimAndRemoveUnicodeCharacter should remove specific Unicode characters from a string', () => {
    expect(trimAndRemoveUnicodeCharacter('Hello\u00adWorld')).toBe('HelloWorld');
    expect(trimAndRemoveUnicodeCharacter('Test\u00adString')).toBe('TestString');
});

test('normalizeWhitespace should normalize spaces and newlines', () => {
    expect(normalizeWhitespace('  Hello   World  \n  This is a test  ')).toBe('Hello World This is a test');
});

test('splitTextAndGetPart should return the correct part after splitting by a delimiter', () => {
    const text = 'one,two,three';

    expect(splitTextAndGetPart(text, ',', 1)).toBe('two');
    expect(splitTextAndGetPart(text, ',', 0)).toBe('one');
});

test('normalizeWhitespacesAndRemoveSoftHyphen should normalize spaces and remove soft hyphens', () => {
    expect(normalizeWhitespacesAndRemoveSoftHyphen('Hello\u00ad World')).toBe('Hello World');
    expect(normalizeWhitespacesAndRemoveSoftHyphen('This  is  a\u00adtest')).toBe('This is atest');
    expect(normalizeWhitespacesAndRemoveSoftHyphen('  Multiple   spaces \u00ad and \n newlines  ')).toBe(
        'Multiple spaces and newlines',
    );
    expect(normalizeWhitespacesAndRemoveSoftHyphen('Soft\u00adHyphen')).toBe('SoftHyphen');
});

test('capitalizeFirstWord should capitalize only the first word', () => {
    expect(capitalizeFirstWord('hello world')).toBe('Hello');
    expect(capitalizeFirstWord('JAVASCRIPT testing')).toBe('Javascript');
});

test('convertToEuropeFormat should format numbers in European format', () => {
    expect(convertToEuropeFormat(123456.789)).toBe('123.456,79');
    expect(convertToEuropeFormat(0)).toBe('0,00');
});

test('getCamelCaseText should convert text to camelCase', () => {
    expect(getCamelCaseText('hello')).toBe('hello');
    expect(getCamelCaseText('hello world')).toBe('helloWorld');
    expect(getCamelCaseText('JAVASCRIPT testing')).toBe('javascriptTesting');
    expect(getCamelCaseText('e-Scooter')).toBe('eScooter');
    expect(getCamelCaseText('Giant+nutella')).toBe('giantNutella');
    expect(getCamelCaseText('oppa gangnam-Style')).toBe('oppaGangnamStyle');
    expect(getCamelCaseText('   spaced    words   ')).toBe('spacedWords');
    expect(getCamelCaseText('123 Number 4 Test!')).toBe('numberTest');
    expect(getCamelCaseText('')).toBe('');
    expect(getCamelCaseText('!@#$%^&*()')).toBe('');
});

test('getPascalCaseText should convert text to PascalCase', () => {
    expect(getPascalCaseText('hello')).toBe('Hello');
    expect(getPascalCaseText('hello world')).toBe('HelloWorld');
    expect(getPascalCaseText('JAVASCRIPT testing')).toBe('JavascriptTesting');
    expect(getPascalCaseText('e-Scooter')).toBe('EScooter');
    expect(getPascalCaseText('Giant+nutella')).toBe('GiantNutella');
    expect(getPascalCaseText('oppa gangnam-Style')).toBe('OppaGangnamStyle');
    expect(getPascalCaseText('   spaced    words   ')).toBe('SpacedWords');
    expect(getPascalCaseText('123 Number 4 Test!')).toBe('NumberTest');
    expect(getPascalCaseText('')).toBe('');
    expect(getPascalCaseText('!@#$%^&*()')).toBe('');
});

test('getExecutionTime should calculate the execution time in seconds', () => {
    const startTime = Date.now();
    // Simulate some delay
    setTimeout(() => {
        const executionTime = getExecutionTime(startTime);

        expect(parseFloat(executionTime)).toBeGreaterThan(0);
    }, 100);
});

test('extractTextOnly should remove numbers and currency symbols from a string', () => {
    expect(extractTextOnly('Price is 100€')).toBe('Price is');
    expect(extractTextOnly('Total: $123.45')).toBe('Total:');
    expect(extractTextOnly('Amount: £50,000')).toBe('Amount:');
    expect(extractTextOnly('No numbers or symbols')).toBe('No numbers or symbols');
});

test('trimToTwoDecimalPlaces should trim a number to two decimal places', () => {
    expect(trimToTwoDecimalPlaces(123.456)).toBe(123.46);
    expect(trimToTwoDecimalPlaces(123.4)).toBe(123.4);
    expect(trimToTwoDecimalPlaces(123)).toBe(123.0);
    expect(trimToTwoDecimalPlaces(0.1234)).toBe(0.12);
    expect(trimToTwoDecimalPlaces(0)).toBe(0.0);
});

test('getMultipleUniqueNumbers should return an array of unique numbers', () => {
    expect(getMultipleUniqueIndexes(5)).toHaveLength(1);
    expect(getMultipleUniqueIndexes(5, 2)).toHaveLength(2);
    expect(getMultipleUniqueIndexes(5, 5)).toHaveLength(5);
    expect(getMultipleUniqueIndexes(5, 6)).toHaveLength(5);
});

test('getRandomString should return a random item from the provided array', () => {
    const items = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    const randomItem = getRandomString(items);

    expect(items).toContain(randomItem);
});
