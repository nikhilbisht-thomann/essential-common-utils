/**
 * Generates a random index for an array.
 *
 * @param {number} arrayLength - The length of the array. Default is 5.
 * @returns {number} A random index for the array.
 */
export declare const generateRandomArrayIndex: (arrayLength?: number) => number;
/**
 * Trims a string and removes all spaces.
 *
 * @param {string} input - The string to trim and remove spaces from.
 * @returns {string} The input string without spaces.
 */
export declare const trimAndRemoveSpaces: (input: string) => string;
/**
 * Extracts URLs from a text string.
 *
 * @param {string} text - The text to extract URLs from.
 * @returns {string[]} An array of URLs found in the text.
 */
export declare const extractUrlsFromText: (text: string) => string[];
/**
 * Trims a string and removes double spaces.
 *
 * @param {string} input - The string to trim and remove double spaces from.
 * @returns {string} The input string without double spaces.
 */
export declare const trimAndRemoveDoubleSpaces: (input: string) => string;
/**
 * Trims a string and removes a specific Unicode character.
 *
 * @param {string} input - The string to trim and remove the Unicode character from.
 * @returns {string} The input string without the Unicode character.
 */
export declare const trimAndRemoveUnicodeCharacter: (input: string) => string;
/**
 * Normalizes whitespace in a string.
 *
 * @param {string} input - The string to normalize whitespace in.
 * @returns {string} The input string with normalized whitespace.
 */
export declare const normalizeWhitespace: (input: string) => string;
/**
 * Splits a text string by a delimiter and returns a specific part.
 *
 * @param {string} text - The text to split.
 * @param {string} delimiter - The delimiter to split the text by.
 * @param {number} index - The index of the part to return.
 * @returns {string} The specified part of the split text.
 */
export declare const splitTextAndGetPart: (text: string, delimiter: string, index: number) => string;
/**
 * Normalizes whitespace in a string and removes soft hyphen characters.
 *
 * @param {string} text - The text to normalize whitespace in and remove soft hyphens from.
 * @returns {string} The input string with normalized whitespace and without soft hyphens.
 */
export declare const normalizeWhitespacesAndRemoveSoftHyphen: (text: string) => string;
/**
 * Converts a number to a string in the European format.
 *
 * @param {number} value - The number to convert.
 * @returns {string} The number as a string in the European format.
 */
export declare const convertToEuropeFormat: (value: number) => string;
/**
 * Converts a given text to camelCase format.
 *
 * @param {string} text - The input text to be converted.
 * @returns {string} The input text converted to camelCase format.
 */
export declare const getCamelCaseText: (text: string) => string;
/**
 * Calculates the execution time in seconds.
 *
 * @param {number} startTime - The start time in milliseconds (typically from `Date.now()`).
 * @returns {string} The execution time in seconds, formatted to two decimal places.
 */
export declare const getExecutionTime: (startTime: number) => string;
