### Debugging Questions – Lab 4

**1. What was the bug?**  
The values retrieved from the input fields using `.value` were strings. When adding two string values like `"2"` and `"3"`, JavaScript concatenates them, resulting in `"23"` instead of `5`.

**2. How would you fix it?**  
The fix is to explicitly convert the input strings to numbers using the `Number()` function. This ensures numeric addition rather than string concatenation.

**Fixed Code:**
```js
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
