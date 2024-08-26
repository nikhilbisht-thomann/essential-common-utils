# Thomann Utils

A collection of utility functions for various common operations in JavaScript and TypeScript projects. The `common-utils-e2e` package provides a set of reusable functions for string manipulation, number formatting, URL extraction, and more.

## Table of Contents

- [Installation](#installation)
- [Usage Example](#usage-example)
- [Functions](#functions)
  - [generateRandomArrayIndex](#generaterandomarrayindex)
  - [trimAndRemoveSpaces](#trimandremovespaces)
  - [extractUrlsFromText](#extracturlsfromtext)
  - [trimAndRemoveDoubleSpaces](#trimandremovedoublespaces)
  - [trimAndRemoveUnicodeCharacter](#trimandremoveunicodecharacter)
  - [normalizeWhitespace](#normalizewhitespace)
  - [splitTextAndGetPart](#splittextandgetpart)
  - [normalizeWhitespacesAndRemoveSoftHyphen](#normalizewhitespacesandremovesofthyphen)
  - [convertToEuropeFormat](#converttoeuropeformat)
  - [getCamelCaseText](#getcamelcasetext)
  - [getExecutionTime](#getexecutiontime)
- [License](#license)

## Installation

You can install the package via npm:

```shell
npm install common-utils-e2e
```

## Usage Example
import { generateRandomArrayIndex } from 'common-utils-e2e';

```shell
const randomIndex = generateRandomArrayIndex(10); // Generates a random index between 0 and 9
```