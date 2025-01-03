# Essential common utilities

A collection of essesntial utility functions for various common operations in JavaScript and TypeScript projects. The `essential-common-utils` package provides a set of reusable functions for string manipulation, number formatting, URL extraction, and more.

## Utility Functions

### 1. `generateRandomArrayIndex`

Generates a random index for an array.

-   **Parameters**: `arrayLength` (optional, default: `5`)
-   **Returns**: A random index.
-   **Example**:
    ```typescript
    const randomIndex = generateRandomArrayIndex(10);
    ```

---

### 2. `trimAndRemoveSpaces`

Trims a string and removes all spaces.

-   **Parameters**: `input` (string)
-   **Returns**: A string without spaces.
-   **Example**:
    ```typescript
    const result = trimAndRemoveSpaces(' Hello World ');
    // Output: "HelloWorld"
    ```

---

### 3. `extractUrlsFromText`

Extracts URLs from a given text.

-   **Parameters**: `text` (string)
-   **Returns**: An array of URLs found in the text.
-   **Example**:
    ```typescript
    const urls = extractUrlsFromText('Check out https://example.com');
    // Output: ["https://example.com"]
    ```

---

### 4. `trimAndRemoveDoubleSpaces`

Trims a string and removes double spaces.

-   **Parameters**: `input` (string)
-   **Returns**: A string without double spaces.
-   **Example**:
    ```typescript
    const result = trimAndRemoveDoubleSpaces('Hello  World');
    // Output: "Hello World"
    ```

---

### 5. `trimAndRemoveUnicodeCharacter`

Trims a string and removes a specific Unicode character.

-   **Parameters**: `input` (string)
-   **Returns**: A string without the Unicode character.
-   **Example**:
    ```typescript
    const result = trimAndRemoveUnicodeCharacter('Hello­World');
    // Output: "HelloWorld"
    ```

---

### 6. `normalizeWhitespace`

Normalizes whitespace in a string.

-   **Parameters**: `input` (string)
-   **Returns**: A string with normalized whitespace.
-   **Example**:
    ```typescript
    const result = normalizeWhitespace("Hello
    World");
    // Output: "Hello World"
    ```

---

### 7. `splitTextAndGetPart`

Splits a text by a delimiter and returns a specific part.

-   **Parameters**:
    -   `text` (string): Text to split.
    -   `delimiter` (string): Delimiter for splitting.
    -   `index` (number): Index of the desired part.
-   **Returns**: The specified part of the split text.
-   **Example**:
    ```typescript
    const part = splitTextAndGetPart('apple,orange,banana', ',', 1);
    // Output: "orange"
    ```

---

### 8. `normalizeWhitespacesAndRemoveSoftHyphen`

Normalizes whitespace and removes soft hyphen characters.

-   **Parameters**: `text` (string)
-   **Returns**: A string with normalized whitespace and no soft hyphens.
-   **Example**:
    ```typescript
    const result = normalizeWhitespacesAndRemoveSoftHyphen('Hello ­World');
    // Output: "Hello World"
    ```

---

### 9. `capitalizeFirstWord`

Capitalizes the first word and makes the rest lowercase.

-   **Parameters**: `text` (string)
-   **Returns**: A string with the first word capitalized.
-   **Example**:
    ```typescript
    const result = capitalizeFirstWord('hello world');
    // Output: "Hello world"
    ```

---

### 10. `convertToEuropeFormat`

Converts a number to a European format string.

-   **Parameters**: `value` (number)
-   **Returns**: A string in the European format.
-   **Example**:
    ```typescript
    const formatted = convertToEuropeFormat(123456.789);
    // Output: "123.456,79"
    ```

---

### 11. `getCamelCaseText`

Converts a string to camelCase.

-   **Parameters**: `text` (string)
-   **Returns**: A camelCase string.
-   **Example**:
    ```typescript
    const result = getCamelCaseText('Hello World');
    // Output: "helloWorld"
    ```

---

### 12. `getPascalCaseText`

Converts a string to PascalCase.

-   **Parameters**: `text` (string)
-   **Returns**: A PascalCase string.
-   **Example**:
    ```typescript
    const result = getPascalCaseText('hello world');
    // Output: "HelloWorld"
    ```

---

### 13. `getExecutionTime`

Calculates the execution time in seconds.

-   **Parameters**: `startTime` (number)
-   **Returns**: The execution time in seconds (string).
-   **Example**:
    ```typescript
    const start = Date.now();
    // some process
    const time = getExecutionTime(start);
    // Output: "0.12"
    ```

---

### 14. `extractTextOnly`

Extracts text content, removing numbers and currency symbols.

-   **Parameters**: `input` (string)
-   **Returns**: A string without numbers and currency symbols.
-   **Example**:
    ```typescript
    const result = extractTextOnly('Price: $123.45');
    // Output: "Price"
    ```

---

### 15. `trimToTwoDecimalPlaces`

Trims a number to two decimal places.

-   **Parameters**: `num` (number)
-   **Returns**: A number with two decimal places.
-   **Example**:
    ```typescript
    const trimmed = trimToTwoDecimalPlaces(123.456);
    // Output: 123.46
    ```

### 16. `getMultipleUniqueIndexes`

Generates multiple unique indexes for an array.

-   **Parameters**:
    -   `arrayLength` (number)
    -   `count` (number)
-   **Returns**: An array of unique indexes.
-   **Example**:
    ```typescript
    const indexes = getMultipleUniqueIndexes(10, 5);
    // Output: [1, 3, 5, 7, 9]
    ```

---

### 17. `getRandomString`

Returns a random string from the provided list.

-   **Parameters**: `items` (string[]): An array of items to choose from.
-   **Returns**: A random item from the array.
-   **Example**:
    ```typescript
    const randomQuote = getRandomString(['apple', 'banana', 'cherry']);
    // Output: "banana" (or any other item from the array)
    ```

---

## Usage

To use these utilities, import them from the `Common.ts` file in your project. For example:

```typescript
import {generateRandomArrayIndex, trimAndRemoveSpaces} from './src/Common';

const index = generateRandomArrayIndex(10);
const text = trimAndRemoveSpaces(' Hello World ');
```

## **Contributing**

Contributions are welcome! If you’d like to report a bug, suggest a feature, or contribute to the codebase, feel free to open an issue or submit a pull request.

---

## **License**

This package is licensed under the [MIT License](LICENSE).
