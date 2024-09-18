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
 * Converts a given text to camelCase format.
 * Removes all non-alphabetic characters before converting to camelCase.
 *
 * @param {string} text - The input text to be converted.
 * @returns {string} The input text converted to camelCase format.
 */
export const getCamelCaseText = (text: string): string => {
    const sanitizedText = text.replace(/[^a-zA-Z ]+/g, ' ');
    const words = sanitizedText.split(' ').filter(Boolean);

    return words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
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
