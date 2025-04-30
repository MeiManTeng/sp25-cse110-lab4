# Part 1: 

## Q1 
**What is printed by line 9?**
'values added:  20'

**Explanation:** 'The 'if(add) condition is 'true', so the 'result' cariable is declared  with `var` inside the block. Because `var` is **function-scoped**, it remains accessible throughout the entire function. The result `10 + 10 = 20` is printed at line 9.

## Q2

**What is printed in line 13? If the code returns an error, explain why.** 'final result:  20'

**Explanation:** Since `var` is not block-scoped, `result` is still accessible after the `if` block. So, line 13 prints `final result: 20`.

---

## Q3
**Why should you not use `var`?**  
Using `var` can lead to **unintended behavior** due to its function-level scoping. Variables declared with `var` can be accessed outside the block they're defined in, which increases the risk of **naming conflicts and bugs**. Use `let` or `const` for safer block-scoped declarations.

## Q4
**What is printed by line 9? If the code returns an error, explain why.** 

'values added:  20'


'ReferenceError: result is not defined'

**Explanation:** The `result` variable is declared using `let`, which is **block-scoped**, but line 9 is still inside the `if` block. So, `result` exists there, and its value is `20`.

---
## Q5
**What is printed by line 13? If the code returns an error, explain why.** 'ReferenceError: result is not defined'

**Explanation:** `let` is block-scoped, so the variable `result` declared inside the `if` block is not accessible outside of it. Line 13 tries to access a variable that doesn't exist in that scope.

## Question 6
**What is printed by line 9?**  

'result = num1 + num2; 
             ^

TypeError: Assignment to constant variable.'

**Explanation:** `const` variables **cannot be reassigned** after declaration. Line 6 sets `result = 0`, but line 7 tries to reassign it to `num1 + num2`. This causes a `TypeError` due to invalid reassignment.

---
## Question 7
**What is printed by line 13?**  
**This line is never reached**

**Explanation:**  
The code throws a `TypeError` at line 7 due to reassignment of a `const` variable. Since the function throws an error and halts, line 13 is never executed.
