"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExecutionTime = exports.getCamelCaseText = exports.convertToEuropeFormat = exports.normalizeWhitespacesAndRemoveSoftHyphen = exports.splitTextAndGetPart = exports.normalizeWhitespace = exports.trimAndRemoveUnicodeCharacter = exports.trimAndRemoveDoubleSpaces = exports.extractUrlsFromText = exports.trimAndRemoveSpaces = exports.generateRandomArrayIndex = void 0;
const extract_urls_1 = __importDefault(require("extract-urls"));
/**
 * Generates a random index for an array.
 *
 * @param {number} arrayLength - The length of the array. Default is 5.
 * @returns {number} A random index for the array.
 */
const generateRandomArrayIndex = (arrayLength = 5) => Math.floor(Math.random() * arrayLength) || 1;
exports.generateRandomArrayIndex = generateRandomArrayIndex;
/**
 * Trims a string and removes all spaces.
 *
 * @param {string} input - The string to trim and remove spaces from.
 * @returns {string} The input string without spaces.
 */
const trimAndRemoveSpaces = (input) => input.trim().replace(/\s/g, '');
exports.trimAndRemoveSpaces = trimAndRemoveSpaces;
/**
 * Extracts URLs from a text string.
 *
 * @param {string} text - The text to extract URLs from.
 * @returns {string[]} An array of URLs found in the text.
 */
const extractUrlsFromText = (text) => (0, extract_urls_1.default)(text);
exports.extractUrlsFromText = extractUrlsFromText;
/**
 * Trims a string and removes double spaces.
 *
 * @param {string} input - The string to trim and remove double spaces from.
 * @returns {string} The input string without double spaces.
 */
const trimAndRemoveDoubleSpaces = (input) => { var _a; return (_a = input === null || input === void 0 ? void 0 : input.trim().replaceAll('  ', ' ')) !== null && _a !== void 0 ? _a : ''; };
exports.trimAndRemoveDoubleSpaces = trimAndRemoveDoubleSpaces;
/**
 * Trims a string and removes a specific Unicode character.
 *
 * @param {string} input - The string to trim and remove the Unicode character from.
 * @returns {string} The input string without the Unicode character.
 */
const trimAndRemoveUnicodeCharacter = (input) => input.trim().replaceAll('\u00ad', '');
exports.trimAndRemoveUnicodeCharacter = trimAndRemoveUnicodeCharacter;
/**
 * Normalizes whitespace in a string.
 *
 * @param {string} input - The string to normalize whitespace in.
 * @returns {string} The input string with normalized whitespace.
 */
const normalizeWhitespace = (input) => input.trim().replaceAll(/[\s\n]+/g, ' ');
exports.normalizeWhitespace = normalizeWhitespace;
/**
 * Splits a text string by a delimiter and returns a specific part.
 *
 * @param {string} text - The text to split.
 * @param {string} delimiter - The delimiter to split the text by.
 * @param {number} index - The index of the part to return.
 * @returns {string} The specified part of the split text.
 */
const splitTextAndGetPart = (text, delimiter, index) => text.split(delimiter)[index];
exports.splitTextAndGetPart = splitTextAndGetPart;
/**
 * Normalizes whitespace in a string and removes soft hyphen characters.
 *
 * @param {string} text - The text to normalize whitespace in and remove soft hyphens from.
 * @returns {string} The input string with normalized whitespace and without soft hyphens.
 */
const normalizeWhitespacesAndRemoveSoftHyphen = (text) => (0, exports.normalizeWhitespace)(text.replaceAll('­', ''));
exports.normalizeWhitespacesAndRemoveSoftHyphen = normalizeWhitespacesAndRemoveSoftHyphen;
/**
 * Converts a number to a string in the European format.
 *
 * @param {number} value - The number to convert.
 * @returns {string} The number as a string in the European format.
 */
const convertToEuropeFormat = (value) => value.toLocaleString('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
exports.convertToEuropeFormat = convertToEuropeFormat;
/**
 * Converts a given text to camelCase format.
 *
 * @param {string} text - The input text to be converted.
 * @returns {string} The input text converted to camelCase format.
 */
const getCamelCaseText = (text) => {
    const words = text.split(' ');
    return words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
};
exports.getCamelCaseText = getCamelCaseText;
/**
 * Calculates the execution time in seconds.
 *
 * @param {number} startTime - The start time in milliseconds (typically from `Date.now()`).
 * @returns {string} The execution time in seconds, formatted to two decimal places.
 */
const getExecutionTime = (startTime) => {
    const endTime = Date.now();
    return ((endTime - startTime) / 1000).toFixed(2);
};
exports.getExecutionTime = getExecutionTime;
