# ES6 Classes and Metaprogramming

Today's focus is on understanding ES6 classes and metaprogramming in JavaScript.

## Tasks

### Task 1: Implement a Class named `ClassRoom`
- Prototype: `export default class ClassRoom`
- Attributes: `maxStudentsSize` (Number)
- Method: Getter for `maxStudentsSize`

### Task 2: Implement a Function named `initializeRooms`
- Return an array of 3 `ClassRoom` objects with sizes 19, 20, and 34.

### Task 3: Implement a Class named `HolbertonCourse`
- Constructor attributes: `name` (String), `length` (Number), `students` (Array of Strings)
- Getters and setters for attributes

### Task 4: Implement a Class named `Currency`
- Constructor attributes: `code` (String), `name` (String)
- Getters and setters for attributes
- Method: `displayFullCurrency` (returns name and code)

### Task 5: Implement a Class named `Pricing`
- Constructor attributes: `amount` (Number), `currency` (Currency)
- Getters and setters for attributes
- Method: `displayFullPrice` (returns amount and currency)
- Static method: `convertPrice` (accepts amount and conversionRate, returns converted amount)

### Task 6: Implement an Abstract Class named `Building`
- Constructor attribute: `sqft` (Number)
- Getter for attribute
- Abstract method: `evacuationWarningMessage`

### Task 7: Implement a Class named `SkyHighBuilding`
- Extends `Building`
- Constructor attributes: `sqft` (Number), `floors` (Number)
- Getters for attributes
- Method: `evacuationWarningMessage` (returns evacuation message)

### Task 8: Implement a Class named `Airport`
- Constructor attributes: `name` (String), `code` (String)
- Getter for attributes
- Default string description returns airport code

### Task 9: Implement a Class named `HolbertonClass`
- Constructor attributes: `size` (Number), `location` (String)
- Getter for attributes
- Casting to Number returns size
- Casting to String returns location

## Usage
- Each task can be imported and used as modules in other JavaScript files.
- Run the provided test scripts to validate the implementation of each task.

Feel free to explore each task further and experiment with different use cases.

