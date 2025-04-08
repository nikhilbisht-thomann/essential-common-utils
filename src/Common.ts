import extractUrls from 'extract-urls';

/**
 * Generates a random index for an array.
 *
 * @param {number} arrayLength - The length of the array. Default is 5.
 * @returns {number} A random index for the array.
 */
export const generateRandomArrayIndex = (arrayLength: number = 5): number => Math.floor(Math.random() * arrayLength);

/**
 * Generates a random number between 1 and the given length.
 * If length is 0 or negative, it defaults to 1.
 *
 * @param {number} maxValue - The maximum value for the random number.
 * @returns {number} A random number between 1 and maxValue (or 1 if length is invalid).
 */
export const generateRandomNumber = (maxValue: number = 5): number => Math.floor(Math.random() * maxValue) || 1;

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
        .replace(/[^\p{L}\s]+/gu, ' ')
        .trim()
        .split(/\s+/)
        .map((word, index) => (index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)))
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
 *
 * @description
 * - Removes currency symbols and non-numeric characters except for commas and periods.
 * - Returns 0 if no valid numeric data remains.
 * - Handles cases where no commas or periods exist (plain numbers).
 * - Identifies US format (comma as thousand separator, period as decimal).
 * - Identifies European format (period as thousand separator, comma as decimal).
 * - Makes a best guess if the format is ambiguous.
 * - Single separator cases are determined based on position and expected number formatting.
 * - Multiple separator cases are resolved by the position of the last separator.
 */
export const parsePricesWithLocaleFormatting = (priceText: string): number => {
    if (!priceText) return 0;

    // Remove currency symbols and any other non-numeric characters except commas and periods
    const cleanedText = priceText.replace(/[^0-9.,]/g, '');

    if (!cleanedText) return 0;

    // If no separators, just return the number
    if (!cleanedText.includes(',') && !cleanedText.includes('.')) {
        return Number(cleanedText);
    }

    const commaCount = (cleanedText.match(/,/g) || []).length;
    const periodCount = (cleanedText.match(/\./g) || []).length;
    const lastCommaIndex = cleanedText.lastIndexOf(',');
    const lastPeriodIndex = cleanedText.lastIndexOf('.');
    const totalLength = cleanedText.length;

    // Helper function to check if a separator is likely a decimal separator
    const isDecimalSeparator = (index: number, separator: string): boolean => {
        const remainingLength = totalLength - index;
        // Check for both European format (comma followed by 2 digits) and US format (period followed by 2 digits)
        return remainingLength === 3 && (separator === ',' || separator === '.');
    };

    // Helper function to check if a separator is likely a thousand separator
    const isThousandSeparator = (index: number, separator: string): boolean => {
        const remainingLength = totalLength - index;
        // For US format, comma is thousand separator if followed by more than 2 digits
        // For European format, period is thousand separator if followed by more than 2 digits
        // or if it's the last separator and there's no comma
        return (
            remainingLength > 3 &&
            ((separator === ',' && !cleanedText.includes('.')) ||
                (separator === '.' && (!cleanedText.includes(',') || commaCount === 0)))
        );
    };

    // If we have both types of separators
    if (commaCount > 0 && periodCount > 0) {
        // If the last separator is a comma and it's followed by 2 digits, it's European format
        if (lastCommaIndex > lastPeriodIndex && isDecimalSeparator(lastCommaIndex, ',')) {
            return Number(cleanedText.replace(/\./g, '').replace(',', '.'));
        }
        // If the last separator is a period and it's followed by 2 digits, it's US format
        if (lastPeriodIndex > lastCommaIndex && isDecimalSeparator(lastPeriodIndex, '.')) {
            return Number(cleanedText.replace(/,/g, ''));
        }
        // If we can't determine based on the last separator, try to guess based on the pattern
        if (isThousandSeparator(lastCommaIndex, ',')) {
            return Number(cleanedText.replace(/,/g, ''));
        }
        return Number(cleanedText.replace(/\./g, '').replace(',', '.'));
    }

    // If we only have one type of separator
    if (commaCount === 1 && periodCount === 0) {
        // If the comma is followed by 2 digits, it's likely a decimal separator (European format)
        if (isDecimalSeparator(lastCommaIndex, ',')) {
            return Number(cleanedText.replace(',', '.'));
        }
        // Otherwise, it's likely a thousand separator (US format)
        return Number(cleanedText.replace(',', ''));
    }

    if (periodCount === 1 && commaCount === 0) {
        // If the period is followed by 2 digits, it's likely a decimal separator (US format)
        if (isDecimalSeparator(lastPeriodIndex, '.')) {
            return Number(cleanedText);
        }
        // Otherwise, it's likely a thousand separator (European format)
        return Number(cleanedText.replace('.', ''));
    }

    // If we have multiple periods and no commas, assume European format
    if (periodCount > 1 && commaCount === 0) {
        return Number(cleanedText.replace(/\./g, ''));
    }

    // If we have multiple commas and no periods, assume US format
    if (commaCount > 1 && periodCount === 0) {
        return Number(cleanedText.replace(/,/g, ''));
    }

    // If we can't determine the format, try to make a best guess
    // If the last separator is a comma, assume European format
    if (lastCommaIndex > lastPeriodIndex) {
        return Number(cleanedText.replace(/\./g, '').replace(',', '.'));
    }
    // Otherwise, assume US format
    return Number(cleanedText.replace(/,/g, ''));
};

const HTML_ENTITIES: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': "'",
    '&nbsp;': ' ',
    '&copy;': '©',
    '&reg;': '®',
    '&trade;': '™',
    '&euro;': '€',
    '&pound;': '£',
    '&cent;': '¢',
    '&deg;': '°',
    '&plusmn;': '±',
    '&para;': '¶',
    '&sect;': '§',
    '&times;': '×',
    '&divide;': '÷',
    '&mdash;': '—',
    '&ndash;': '–',
    '&hellip;': '…',
    '&laquo;': '«',
    '&raquo;': '»',
};

/**
 * A collection of text helper functions for handling HTML entities and text normalization
 */
export const textHelper = {
    /**
     * Decodes HTML entities using a simple replacement approach
     * @param text - The text that might contain HTML entities
     * @returns The decoded text
     */
    decodeHtmlEntities(text: string): string {
        let decodedText = text;

        // Replace all known HTML entities
        Object.entries(HTML_ENTITIES).forEach(([entity, char]) => {
            decodedText = decodedText.replace(new RegExp(entity, 'g'), char);
        });

        // Handle numeric HTML entities (e.g., &#39;)
        decodedText = decodedText.replace(/&#(\d+);/g, (match, dec) => {
            return String.fromCharCode(dec);
        });

        return decodedText;
    },

    /**
     * Normalizes text by decoding HTML entities and standardizing special characters
     * @param text - The text to normalize
     * @returns The normalized text
     */
    normalizeText(text: string): string {
        let normalized = this.decodeHtmlEntities(text)
            .replace(/[\u2018\u2019]/g, "'") // Smart single quotes
            .replace(/[\u201C\u201D]/g, '"') // Smart double quotes
            .replace(/[']{2,}/g, '"') // Double single quotes to double quote
            .trim();

        // Normalize whitespace (multiple spaces to single space)
        normalized = normalized.replace(/\s+/g, ' ');

        return normalized;
    },

    /**
     * Compares two strings after normalization
     * @param actual - The actual text from the page
     * @param expected - The expected text from test data
     * @returns boolean indicating if texts match after normalization
     */
    compareTexts(actual: string, expected: string): boolean {
        const normalizedActual = this.normalizeText(actual);
        const normalizedExpected = this.normalizeText(expected);

        // Debug logging to help identify issues
        if (normalizedActual !== normalizedExpected) {
            console.log('Text comparison failed:');
            console.log('Original actual  :', actual);
            console.log('Original expected:', expected);
            console.log('Normalized actual:', normalizedActual);
            console.log('Normalized expect:', normalizedExpected);
        }

        return normalizedActual === normalizedExpected;
    },
};
