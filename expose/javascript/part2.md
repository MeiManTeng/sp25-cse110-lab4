# Part 1: 

## Q1 
**What will happen at line 12 and why? If the code causes an error, explain why.**
'3'

**Explanation:** The variable `i` is declared using `var`, which is **function-scoped**. That means it is accessible **outside the for-loop block**, and by the time the loop finishes, `i` has incremented to 3 (since `prices.length === 3`). So `console.log(i)` prints `3`.

---
## Q2
**What will happen at line 13 and why? If the code causes an error, explain why.** 150

**Explanation:** The variable `discountedPrice` is declared with `var` inside the `for` loop, but since `var` is **function-scoped**, it is accessible outside the loop as well. Its final value after the loop ends is `150`, so `console.log(discountedPrice)` prints `150`.

---
## Q3
**What will happen at line 14 and why? If the code causes an error, explain why.** '150'

**Explanation:** The variable `finalPrice` is declared with `var` at the top of the function, giving it function scope. It remains accessible throughout the entire function. By the time the loop finishes, the last value assigned to `finalPrice` is from the last item in the array: `300 * (1 - 0.5) = 150`. So line 14 prints `150`.


----
## Q4
**What will this function return? Give a brief explanation why. If the code causes an error, explain why.** Returned value: [50, 100, 150]

**Explanation:** The function correctly computes a 50% discount on each item, rounds the values, and stores them in the `discounted` array. It returns `[50, 100, 150]`. However, since the function call is not wrapped in `console.log(...)`, the returned value is not displayed in the terminal.


---

## Q5
**What will happen at line 12 and why?  If the code causes an error, explain why. (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).** 'ReferenceError: i is not defined'

**Explanation:** Because `i` was declared with `let` inside the for-loop, and `let` is block-scoped, so it cannot be accessed outside the loop at line 12.

---

## Q6
**What will happen at line 13 and why? If the code causes an error, explain why.**
'ReferenceError: discountedPrice is not defined'

**Explanation:** The variable `discountedPrice` is declared using `let` inside the `for` loop block, which means it has **block scope**. Once the loop finishes, `discountedPrice` is no longer accessible. Trying to access it at line 13 causes a `ReferenceError` because it is out of scope.

---

## Q7
**What will happen at line 14 and why? If the code causes an error, explain why.** '150'

**Explanation:** The variable `finalPrice` is declared using `let` at the top of the function, so it has function scope and is accessible throughout the function. After the loop ends, the last value assigned to `finalPrice` is from the final iteration of the loop: `300 * (1 - 0.5) = 150`. Therefore, line 14 prints `150`.


---

## Q8
**What will this function return? Give a brief explanation. If the code causes an error, explain why.** Nothing is printed.


**Explanation:**
The function returns an array of discounted prices:  
- `100 * 0.5 = 50`  
- `200 * 0.5 = 100`  
- `300 * 0.5 = 150`

Since the call to `discountPrices()` is not wrapped in `console.log(...)`, the return value isn't printed to the console.


---

## Q9
**What will happen at line 12 and why? If the code causes an error, explain why.** 'ReferenceError: i is not defined'


**Explanation:** The variable `i` is declared with `let` inside the `for` loop, so it is block-scoped. This means `i` only exists within the `{}` of the loop. Attempting to access it outside the loop at line 11 results in a `ReferenceError` because it is out of scope.

---
## Q9
**What will happen at line 11 and why? If the code causes an error, explain why.** '3'

**Explanation:** The variable `length` is declared using `const` at the top of the function, so it has function scope and is accessible throughout the function. Since `prices.length` is 3, `console.log(length)` prints `3`.

---

## Q11
**What will this function return? Give a brief explanation. If the code causes an error, explain why.** Returned value: [50, 100, 150]

**Explanation:** The function loops through each price, applies a 50% discount, and pushes the result to the `discounted` array. It returns that array, but since the return value is not passed to `console.log()`, nothing is printed to the terminal.

---
## Q12

A. `student.name`  
B. `student["Grad Year"]`  
C. `student.greeting()`  
D. `student["Favorite Teacher"].name`  
E. `student.courseLoad[0]`  

---

## Q13: Arithmetic

A. `'3' + 2` → `'32'` – string concatenation occurs  
B. `'3' - 2` → `1` – string `'3'` is coerced to number  
C. `3 + null` → `3` – null is coerced to 0  
D. `'3' + null` → `'3null'` – null is coerced to `'null'`  
E. `true + 3` → `4` – true is coerced to 1  
F. `false + null` → `0` – both coerced to 0  
G. `'3' + undefined` → `'3undefined'` – undefined is coerced to `'undefined'`  
H. `'3' - undefined` → `NaN` – undefined cannot be coerced to a number  

---

## Q14: Comparison

A. `'2' > 1` → `true` – string is coerced to number  
B. `'2' < '12'` → `false` – string comparison, not numeric  
C. `2 == '2'` → `true` – loose equality with coercion  
D. `2 === '2'` → `false` – strict equality (type mismatch)  
E. `true == 2` → `false` – true is 1, not equal to 2  
F. `true === Boolean(2)` → `true` – both are boolean true  

---

## Q15

`==` compares values **after type coercion** if needed.  
`===` compares values **without type coercion** (must be same type and value).

---

## Q17

**Output:**
```
[2, 4, 6]
```

**Explanation:**
`modifyArray([1,2,3], doSomething)` goes through the array and calls `doSomething(num)` for each element. That function doubles the number, so `[1,2,3]` becomes `[2,4,6]`.

---
## Q17

**Output:**
```
1  
4  
3  
2
```

---
## Q17

In `part2-question18.js` fil
