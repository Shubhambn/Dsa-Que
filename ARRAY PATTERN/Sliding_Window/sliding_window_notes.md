# 🪟 Sliding Window — Human Way Notes

> Sliding Window is not an algorithm.  
> It’s just **not repeating work unnecessarily**.

We first think like a **normal person**,  
then slowly turn that thinking into code.

---

## 🧠 What Sliding Window REALLY Means

Sliding Window works on **continuous elements**.

> You look at a group of adjacent elements,  
> then **move forward step by step**,  
> instead of restarting from scratch.

If elements are **not continuous**, sliding window ❌.

---

## ✅ When Sliding Window Can Be Used

Sliding Window works when:
- We are dealing with a **subarray** or **substring**
- Elements are **continuous**
- We can:
  - add an element from the right
  - remove an element from the left

---

## ❌ When Sliding Window Cannot Be Used

Sliding Window does NOT work when:
- Elements are **not continuous**
- Problem talks about **subsequence**
- Array contains **negative numbers** (in many cases)
- Condition cannot be adjusted by shrinking or expanding

---

## 🔑 One Golden Question (Always Ask This)

> “Can I remove the leftmost element  
> and safely add the next right element?”

If yes → Sliding Window  
If no → Use another approach

---

## 🧩 Types of Sliding Window

There are **ONLY TWO TYPES**.  
No third type exists.

---

# 🪟 TYPE 1: FIXED SIZE WINDOW

### Meaning:
The window size is **constant (k)**.

---

## 🧪 Example (Human Way)

**Array:**
[2, 1, 5, 1, 3, 2]


**Question:**
> Find the **maximum sum of subarray of size 3**

---

### Human Thinking:
- First window → `[2, 1, 5]`
- Move right by one step
- Remove left element, add right element

No recomputation.

---

## 🧪 Pseudocode (Readable)

```text
windowSum = 0
maxSum = -infinity

for i = 0 to k-1:
    windowSum += arr[i]

maxSum = windowSum

for i = k to n-1:
    windowSum += arr[i]        // add new
    windowSum -= arr[i-k]      // remove old
    maxSum = max(maxSum, windowSum)

return maxSum
```
## ⏱ Complexity (Fixed Window)

- Time: O(n)
- Space: O(1)


## 🟢 Key Insight (Fixed Window)

- Window size never changes.
- Only its position moves.

## 🪟 TYPE 2: VARIABLE SIZE WINDOW

### Meaning:
 - Window size changes based on condition.


## 🧪 Example (Human Way)

Array:
  [1, 2, 3, 4, 5]

Question:
  Find the longest subarray with sum ≤ 7

## Human Thinking:

 - Start small

 - Expand window to the right

 - If condition breaks → shrink from left

 - Keep track of best result

## 🧪 Pseudocode (Readable)

```text


left = 0
sum = 0
maxLength = 0

for right = 0 to n-1:
    sum += arr[right]

    while sum > 7:
        sum -= arr[left]
        left++

    maxLength = max(maxLength, right - left + 1)
```

## ⏱️ Complexity (Variable Window)

 - Time: O(n)

 - Space: O(1)

 ### Each element:

   - Added once

   - Removed once

## 🟢 Key Insight (Variable Window)
  Expand when condition allows
  Shrink when condition break

The window adjusts itself.

## 🚫 Important Limitation (Must Remember)

 - Sliding Window fails when:

 - Array has negative numbers

 - Condition is not monotonic

### Example:

  - Longest subarray with sum = K (with negatives)

Sliding Window ❌
Prefix Sum + HashMap ✅

## 🧠 Interview Explanation (Simple & Clear)

  “Since the elements are continuous,
  we can use a sliding window to avoid recalculating values
  and achieve linear time complexity.”

## 🧠 Mental Checklist Before Using Sliding Window
  ### Ask yourself:

   1) Is the data continuous?
   2) Is window size fixed or variable?
   3) Can I expand and shrink logically?

If yes → Sliding Window
If no → Choose another pattern

## 🟢 Final Takeaway
- Sliding Window = efficient brute force

- It saves time by reusing previous work

- Works only on continuous data

- Understanding > memorization