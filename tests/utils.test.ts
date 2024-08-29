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
    getCamelCaseText,
    getExecutionTime,
    extractTextOnly,
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
    expect(normalizeWhitespacesAndRemoveSoftHyphen('This  is  a\u00adtest')).toBe('This is a test');
});

test('convertToEuropeFormat should format numbers in European format', () => {
    expect(convertToEuropeFormat(123456.789)).toBe('123.456,79');
    expect(convertToEuropeFormat(0)).toBe('0,00');
});

test('getCamelCaseText should convert text to camelCase', () => {
    expect(getCamelCaseText('hello world')).toBe('Hello');
    expect(getCamelCaseText('JAVASCRIPT testing')).toBe('Javascript');
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
