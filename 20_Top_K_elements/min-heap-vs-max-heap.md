
## The main rule

Ask yourself:

> **"What element do I need to quickly remove?"**

Then choose the heap based on that.

### If you need to remove the **smallest** → use **Min Heap**

### If you need to remove the **largest** → use **Max Heap**

That's the core idea.

---

## Let's connect it to the problems we've done

### 1. K Largest Numbers

```text
[3, 1, 5, 12, 2, 11]
K = 3
```

We want to keep the **3 largest**:

```text
5, 11, 12
```

But when a new number comes, which one should we remove?

Suppose we currently have:

```text
5, 11, 12
```

and `20` arrives.

We now have:

```text
5, 11, 12, 20
```

We need to remove:

```text
5 ← smallest
```

Therefore:

**Min Heap.**

---

### 2. K Smallest Numbers

We want to keep the K smallest.

Suppose:

```text
1, 2, 5
```

and `0` arrives:

```text
0, 1, 2, 5
```

We need to remove:

```text
5 ← largest
```

Therefore:

**Max Heap.**

---

### 3. Kth Largest Number

We want the Kth largest.

For:

```text
K = 3
```

keep:

```text
[5, 11, 12]
```

Which one represents the 3rd largest?

```text
5 ← smallest among these 3
```

So we need the smallest element easily available.

**Min Heap.**

And:

```javascript
heap.peek()
```

gives the answer.

---

### 4. K Closest Points

"Closest" means **smallest distance**.

So we want the K smallest distances.

Suppose our current K closest are:

```text
distance: 5, 10
```

A new point has distance `2`.

Now:

```text
2, 5, 10
```

We need to remove:

```text
10 ← largest distance
```

Therefore:

**Max Heap.**

---

### 5. Connect Ropes

This one is slightly different.

The instruction is essentially:

> Always pick the **two smallest ropes**.

So we need the smallest elements immediately.

Therefore:

**Min Heap.**

```text
smallest
   ↓
Min Heap
```

---

### 6. Top K Frequent Numbers

We want the **K highest frequencies**.

Suppose:

```text
A → 5
B → 3
C → 1
```

and K = 2.

Keep:

```text
A → 5
B → 3
```

If another number has frequency `6`:

```text
A → 5
B → 3
D → 6
```

We need to remove:

```text
B → 3 ← smallest frequency
```

Therefore:

**Min Heap.**

---

### 7. Frequency Sort

Here we want:

```text
highest frequency
        ↓
lowest frequency
```

So we always want to get the **largest frequency first**.

Therefore:

**Max Heap.**

---

# A cheat sheet

| Problem        | What are we keeping/finding?     | Heap         |
| -------------- | -------------------------------- | ------------ |
| K Largest      | K largest                        | **Min Heap** |
| Kth Largest    | K largest, then smallest of them | **Min Heap** |
| Top K Frequent | K highest frequencies            | **Min Heap** |
| K Smallest     | K smallest                       | **Max Heap** |
| K Closest      | K smallest distances             | **Max Heap** |
| Frequency Sort | Highest frequency first          | **Max Heap** |
| Connect Ropes  | Two smallest                     | **Min Heap** |

---

# But there's an even better way to think about it

Don't memorize:

> "K largest = Min Heap."

Instead, think:

### Step 1 — What am I trying to keep?

Example:

```text
K largest
```

So:

```text
Keep K largest
```

### Step 2 — When something new comes, which one becomes useless?

Example:

```text
Current:

5, 10, 20

New number:

30
```

We now have:

```text
5, 10, 20, 30
```

We only want 3.

Which one is useless?

```text
5
```

So:

> I need to quickly find the **smallest**.

Therefore:

> **Min Heap.**

---

# One mental trick

Think of the heap as your **bouncer**.

### Min Heap

The smallest is standing at the door:

```text
Min Heap
   ↓
smallest is easiest to remove
```

Use it when you want to **kick out small things**.

### Max Heap

The largest is standing at the door:

```text
Max Heap
   ↓
largest is easiest to remove
```

Use it when you want to **kick out large things**.

---

## The most important pattern

When you see:

> **"Keep the K largest..."**

think:

```text
K largest
   ↓
If something bigger arrives,
remove the smallest
   ↓
MIN HEAP
```

When you see:

> **"Keep the K smallest..."**

think:

```text
K smallest
   ↓
If something smaller arrives,
remove the largest
   ↓
MAX HEAP
```

And when you see:

> **"Always take the smallest..."**

think:

```text
MIN HEAP
```

When you see:

> **"Always take the largest..."**

think:

```text
MAX HEAP
```

That's enough to solve a **large portion of the heap problems** you'll encounter.
