Parent:
floor((i - 1) / 2)

Left child:
2i + 1

Right child:
2i + 2


visually:

             i
           /   \
       2i + 1  2i + 2



Example: 

These formulas come from how a **complete binary tree is stored inside a 0-indexed array**.

Suppose the heap array is:

```javascript
[10, 7, 9, 2, 3, 8, 6]
```

Its indexes are:

```text
index:  0   1   2   3   4   5   6
value: 10   7   9   2   3   8   6
```

As a tree:

```text
            10(0)
           /     \
        7(1)     9(2)
       /  \      /  \
    2(3) 3(4) 8(5) 6(6)
```

Notice the pattern.

For index `0`:

```text
left child  = 1
right child = 2
```

For index `1`:

```text
left child  = 3
right child = 4
```

For index `2`:

```text
left child  = 5
right child = 6
```

That pattern gives us:

```javascript
left = index * 2 + 1;
right = index * 2 + 2;
```

For example, node at index `2`:

```javascript
left = 2 * 2 + 1;  // 5
right = 2 * 2 + 2; // 6
```

Exactly matching:

```text
        index 2
        /     \
   index 5   index 6
```

The parent formula is just the reverse of this.

If a node is a left child:

```text
child = parent * 2 + 1
```

Rearrange:

```text
child - 1 = parent * 2

parent = (child - 1) / 2
```

So:

```javascript
parent = Math.floor((index - 1) / 2);
```

Why `Math.floor()`? Because the same formula has to work for right children too.

For index `4`:

```javascript
Math.floor((4 - 1) / 2)

= Math.floor(3 / 2)

= 1
```

So parent of index `4` is index `1`.

Correct:

```text
        7(1)
       /   \
    2(3)   3(4)
```

For index `3`:

```javascript
Math.floor((3 - 1) / 2)

= Math.floor(2 / 2)

= 1
```

So both indexes `3` and `4` have parent `1`.

The easiest way to memorize them is:

```text
Parent:
floor((i - 1) / 2)

Left child:
2i + 1

Right child:
2i + 2
```

And visually:

```text
             i
           /   \
       2i + 1  2i + 2
```

These formulas work specifically because the heap is stored **level by level in a 0-indexed array**.
