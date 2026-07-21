The `%` operator gives the **remainder** after division.

```javascript
10 % 3; // 1
```

Because:

```text
10 ÷ 3 = 3 remainder 1
```

Common uses:

### 1. Check even or odd

```javascript
num % 2 === 0; // even
num % 2 !== 0; // odd
```

### 2. Keep a value inside a fixed range

Useful for circular arrays, clocks, indexes, and rotations.

```javascript
nextIndex = (currentIndex + steps) % array.length;
```

Example:

```javascript
6 % 5; // 1
```

So index `6` wraps to index `1`.

### 3. Get the last digit

```javascript
123 % 10; // 3
```

To remove the last digit:

```javascript
Math.floor(123 / 10); // 12
```

### 4. Check divisibility

```javascript
15 % 5 === 0; // true
15 % 4 === 0; // false
```

### 5. Repeat something every `n` steps

```javascript
if (i % 3 === 0) {
  console.log("Every third index");
}
```

### Important in JavaScript

Negative numbers can produce a negative remainder:

```javascript
-2 % 5; // -2
```

To get a positive circular index:

```javascript
const index = ((value % length) + length) % length;
```

Use `%` when you need the remainder, divisibility, repeating patterns, extracting digits, or wrapping values around a range.
