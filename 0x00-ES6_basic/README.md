# Project: Employee Management System

## Project Overview

This project aims to develop an Employee Management System using JavaScript with a focus on ES6 features and modular code organization. The system provides functionalities to manage employees, departments, and generate reports.

## Project Structure

The project consists of the following files and directories:

- **1-block-scoped.js**: Contains a function `taskBlock` demonstrating block-scoping using `let` instead of `var`.
- **2-arrow.js**: Includes a function `getSanFranciscoDescription` rewritten to use arrow function syntax.
- **3-rest-parameter.js**: Defines a function `returnHowManyArguments` utilizing the rest parameter syntax to count the number of arguments passed to it.
- **4-rest-parameter.js**: Modifies the function `appendToEachArrayValue` to use the spread syntax for concatenating arrays and strings.
- **5-spread-operator.js**: Concatenates arrays and string characters using spread syntax within the `concatArrays` function.
- **6-string-interpolation.js**: Updates the `getSanFranciscoDescription` function to use template literals for string interpolation.
- **7-getBudgetObject.js**: Simplifies the `getBudgetObject` function to use shorthand property names for object creation.
- **8-getBudgetCurrentYear.js**: Rewrites the `getBudgetForCurrentYear` function to use computed property names for dynamic key creation.
- **9-getFullBudget.js**: Utilizes ES6 method properties in the `getFullBudgetObject` function for more concise syntax.
- **10-loops.js**: Converts the `appendToEachArrayValue` function to use the `for...of` loop and replaces `var` with `let`.
- **11-createEmployeesObject.js**: Defines a function `createEmployeesObject` to create an object mapping department names to employee arrays.
- **12-createReportObject.js**: Implements a function `createReportObject` to generate a report object containing department-wise employee lists.
- **100-createIteratorObject.js**: Implements a function `createIteratorObject` to create an iterator for iterating through employee names.
- **101-iterateThroughObject.js**: Defines a function `iterateThroughObject` to iterate through the employee names and return them as a string separated by '|'.

## Usage

To use this project:

1. Import the required functions or modules from the respective files.
2. Follow the execution examples provided in each file to understand how to use the functions.
3. Ensure Node.js is installed on your system to run the project files.
4. Run the project files using the `npm run dev <filename>` command.

## Example Usage

```javascript
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));

This will output: Bob | Jane | Sylvie

Credits
This project is created by ALX and was done by Dr. Prince Alex Appiagyei Osei, as part of his software engineering curriculum
