import extractUrls from 'extract-urls';

/**
 * Generates a random index for an array.
 *
 * @param {number} arrayLength - The length of the array. Default is 5.
 * @returns {number} A random index for the array.
 */
export const generateRandomArrayIndex = (arrayLength: number = 5): number =>
    Math.floor(Math.random() * arrayLength) || 1;

/**
 * Trims a string and removes all spaces.
 *
 * @param {string} input - The string to trim and remove spaces from.
 * @returns {string} The input string without spaces.
 */
export const trimAndRemoveSpaces = (input: string): string => input.trim().replace(/\s/g, '');

/**
 * Extracts URLs from a text string.
 *
 * @param {string} text - The text to extract URLs from.
 * @returns {string[]} An array of URLs found in the text.
 */
export const extractUrlsFromText = (text: string): string[] => extractUrls(text);

/**
 * Trims a string and removes double spaces.
 *
 * @param {string} input - The string to trim and remove double spaces from.
 * @returns {string} The input string without double spaces.
 */
export const trimAndRemoveDoubleSpaces = (input: string): string => input?.trim().replaceAll('  ', ' ') ?? '';

/**
 * Trims a string and removes a specific Unicode character.
 *
 * @param {string} input - The string to trim and remove the Unicode character from.
 * @returns {string} The input string without the Unicode character.
 */
export const trimAndRemoveUnicodeCharacter = (input: string): string => input.trim().replaceAll('\u00ad', '');

/**
 * Normalizes whitespace in a string.
 *
 * @param {string} input - The string to normalize whitespace in.
 * @returns {string} The input string with normalized whitespace.
 */
export const normalizeWhitespace = (input: string): string => input.trim().replaceAll(/[\s\n]+/g, ' ');

/**
 * Splits a text string by a delimiter and returns a specific part.
 *
 * @param {string} text - The text to split.
 * @param {string} delimiter - The delimiter to split the text by.
 * @param {number} index - The index of the part to return.
 * @returns {string} The specified part of the split text.
 */
export const splitTextAndGetPart = (text: string, delimiter: string, index: number): string =>
    text.split(delimiter)[index];

/**
 * Normalizes whitespace in a string and removes soft hyphen characters.
 *
 * @param {string} text - The text to normalize whitespace in and remove soft hyphens from.
 * @returns {string} The input string with normalized whitespace and without soft hyphens.
 */
export const normalizeWhitespacesAndRemoveSoftHyphen = (text: string): string =>
    normalizeWhitespace(text.replaceAll('­', ''));

/**
 * Capitalizes the first letter of the first word and makes the rest lowercase.
 *
 * @param {string} text - The input text to be processed.
 * @returns {string} The input text with the first word capitalized and the rest lowercase.
 */
export const capitalizeFirstWord = (text: string): string => {
    const words = text.split(' ');

    return words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
};

/**
 * Converts a number to a string in the European format.
 *
 * @param {number} value - The number to convert.
 * @returns {string} The number as a string in the European format.
 */
export const convertToEuropeFormat = (value: number): string =>
    value.toLocaleString('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

/**
 * Converts a string to camelCase.
 * Removes all non-alphabetic characters and converts the result to camelCase,
 * where the first word is in lowercase and subsequent words are capitalized.
 *
 * @param {string} text - The input string to convert to camelCase.
 * @returns {string} The input string converted to camelCase.
 */
export const getCamelCaseText = (text: string): string => {
    return text
        .replace(/[^a-zA-Z]+/g, ' ')
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
        .join('');
};

/**
 * Converts a given text to PascalCase format.
 * Removes all non-alphabetic characters before converting to PascalCase.
 *
 * @param {string} text - The input text to be converted.
 * @returns {string} The input text converted to PascalCase format.
 */
export const getPascalCaseText = (text: string): string => {
    const words = text
        .replace(/[^a-zA-Z ]+/g, ' ')
        .split(' ')
        .filter(Boolean);

    return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
};

/**
 * Calculates the execution time in seconds.
 *
 * @param {number} startTime - The start time in milliseconds (typically from `Date.now()`).
 * @returns {string} The execution time in seconds, formatted to two decimal places.
 */
export const getExecutionTime = (startTime: number): string => {
    const endTime = Date.now();
    return ((endTime - startTime) / 1000).toFixed(2);
};

/**
 * Extracts only the text content, removing numbers and currency symbols.
 *
 * @param {string} input - The input string to extract text from.
 * @returns {string} The input string without numbers and currency symbols.
 */
export const extractTextOnly = (input: string): string => input.replace(/[\d€$£,.]+/g, '').trim();

/**
 * Trims a number to two decimal places.
 *
 * @param {number} num - The number to be trimmed.
 * @returns {number} The number trimmed to two decimal places.
 */
export const trimToTwoDecimalPlaces = (num: number): number => {
    return parseFloat(num.toFixed(2));
};

/**
 * Generates a specified number of unique random numbers from a given range, adjusting `count` if it exceeds `length`.
 *
 * @param length - The upper limit of the range (inclusive). The range is [1, length].
 * @param count - The number of unique random numbers to generate (default is 1).
 *           If `count` exceeds `length`, it is set to `length`.
 * @returns An array containing `count` unique random numbers within the range [1, length].
 * @throws If `count` is greater than `length`, an error is thrown.
 *
 * @example
 * // Generate 3 unique random numbers from 1 to 5
 * getMultipleUniqueNumbers(5, 3); // Example output: [4, 2, 5]
 *
 * @example
 * // Generate 5 unique random numbers from 1 to 10
 * getMultipleUniqueNumbers(10, 12); // Example output: [3, 9, 4, 2, 5, 7, 1, 8, 10]
 */
export const getMultipleUniqueIndexes = (length: number, count = 1): number[] => {
    if (count > length) {
        count = length;
    }

    const numbers = Array.from({length}, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers.slice(0, count);
};

/**
 * Returns a random string from the provided list.
 *
 * @param {string[]} items - Array of items to choose from.
 * @returns {string} A random item.
 * @throws {Error} If the items array is empty.
 */
export const getRandomString = (items: string[]): string => {
    if (items.length === 0) {
        throw new Error('The items array must not be empty.');
    }
    return items[Math.floor(Math.random() * items.length)];
};

/**
 * Parses price strings with different locale formats and returns the numeric value.
 * Handles both US format (1,234.56) and European format (1.234,56) as well as
 * variations with currency symbols and without separators.
 *
 * @param {string} priceText - The price text to parse.
 * @returns {number} The parsed numeric value.
 */
export const parsePricesWithLocaleFormatting = (priceText: string): number => {
    if (!priceText) return 0;

    // Remove currency symbols and any non-numeric characters except for commas and periods
    const cleanedText = priceText.replace(/[^0-9.,]/g, '');

    // If there's nothing left after cleaning, return 0
    if (!cleanedText) return 0;

    // Case 1: No commas or periods - just a plain number
    if (!cleanedText.includes(',') && !cleanedText.includes('.')) {
        return Number(cleanedText);
    }

    // Count the occurrences of commas and periods
    const commaCount = (cleanedText.match(/,/g) || []).length;
    const periodCount = (cleanedText.match(/\./g) || []).length;

    // Position of last comma and period
    const lastCommaIndex = cleanedText.lastIndexOf(',');
    const lastPeriodIndex = cleanedText.lastIndexOf('.');

    // Check if it's a US format (1,234.56)
    const isUSFormat =
        // Last separator is a period and there are digits after it
        (lastPeriodIndex > lastCommaIndex && lastPeriodIndex > cleanedText.length - 4) ||
        // Only commas exist and they're thousand separators (positioned correctly)
        (commaCount > 0 &&
            periodCount === 0 &&
            cleanedText.length - lastCommaIndex !== 3 &&
            commaCount === Math.floor((cleanedText.length - 1) / 4));

    // Check if it's a European format (1.234,56)
    const isEuropeanFormat =
        // Last separator is a comma and there are digits after it
        (lastCommaIndex > lastPeriodIndex && lastCommaIndex > cleanedText.length - 4) ||
        // Only periods exist and they're thousand separators (positioned correctly)
        (periodCount > 0 &&
            commaCount === 0 &&
            cleanedText.length - lastPeriodIndex !== 3 &&
            periodCount === Math.floor((cleanedText.length - 1) / 4));

    if (isUSFormat) {
        // US format: Remove commas, then parse
        return Number(cleanedText.replace(/,/g, ''));
    } else if (isEuropeanFormat) {
        // European format: Replace periods with nothing, replace comma with period, then parse
        return Number(cleanedText.replace(/\./g, '').replace(',', '.'));
    }

    // If we can't determine the format definitively, make a best guess:

    // If only one separator exists:
    if (commaCount === 1 && periodCount === 0) {
        // If the comma is followed by exactly 2 digits, treat as decimal
        if (cleanedText.length - lastCommaIndex === 3) {
            return Number(cleanedText.replace(',', '.'));
        }
        // Otherwise, remove it (treat as thousand separator)
        return Number(cleanedText.replace(',', ''));
    }

    if (periodCount === 1 && commaCount === 0) {
        // If the period is followed by exactly 2 digits, treat as decimal
        if (cleanedText.length - lastPeriodIndex === 3) {
            return Number(cleanedText);
        }
        // Otherwise, remove it (treat as thousand separator)
        return Number(cleanedText.replace('.', ''));
    }

    // Multiple separators: Use positioning to determine format
    if (lastCommaIndex > lastPeriodIndex) {
        // Last separator is comma, treat as European
        return Number(cleanedText.replace(/\./g, '').replace(',', '.'));
    } else {
        // Last separator is period, treat as US
        return Number(cleanedText.replace(/,/g, ''));
    }
};
