# MongoDB $inc operator error with string value

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment a numeric field.  Attempting to increment a field with a string value will result in an error.

## Bug
The provided `bug.js` file contains code that attempts to increment a field with a string value using the `$inc` operator. This code will produce an error when executed.

## Solution
The `bugSolution.js` file demonstrates the corrected code, where the value to be incremented is explicitly cast to a number before using the `$inc` operator.