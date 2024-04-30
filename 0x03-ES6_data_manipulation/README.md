# ES6 Data Manipulation

This project contains a series of JavaScript functions focused on data manipulation using ES6 features such as map, filter, reduce, and Set.

## Function Descriptions

1. `getListStudents`: Returns an array of objects representing students with attributes id, firstName, and location.
2. `getListStudentIds`: Returns an array of student ids from a list of student objects.
3. `getStudentsByLocation`: Returns an array of student objects located in a specific city.
4. `getStudentIdsSum`: Returns the sum of all student ids.
5. `updateStudentGradeByCity`: Updates the grades of students in a specific city with new grades.
6. `createInt8TypedArray`: Creates a new ArrayBuffer with an Int8 value at a specific position.
7. `setFromArray`: Creates a Set from an array.
8. `hasValuesFromArray`: Checks if all elements in an array exist within a set.
9. `cleanSet`: Returns a string of set values that start with a specific string.
10. `groceriesList`: Returns a map of groceries with items and quantities.
11. `updateUniqueItems`: Updates the quantity of items in a map where the initial quantity is 1.
12. `queryAPI`: Tracks the number of times a query is made to an API endpoint.

## Usage

Each function is contained in its own module file. To use these functions, import the desired function(s) into your project file and call them as needed.

Example usage:

```javascript
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();
console.log(getStudentsByLocation(students, 'San Francisco'));

