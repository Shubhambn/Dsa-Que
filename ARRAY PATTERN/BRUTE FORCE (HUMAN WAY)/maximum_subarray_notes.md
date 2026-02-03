# 🧠 Maximum Subarray Sum — Human Way Notes

> **Forget algorithms for 5 minutes.**  
> We’ll think like a *normal person*, then slowly turn that thinking into code.

---

## 🧩 Step 1: Tiny Problem (No Coding Yet)

### Given Array:
[1, -2, 3]


### Question:
**Which continuous part gives the maximum sum?**

> Thinking out loud is allowed ✅

### All Possible Continuous Parts:

- `[1]` → sum = **1**
- `[1, -2]` → sum = **-1**
- `[1, -2, 3]` → sum = **2**
- `[-2]` → sum = **-2**
- `[-2, 3]` → sum = **1**
- `[3]` → sum = **3** ✅

### ✅ Final Answer:


🎉 **You just solved the problem without DSA.**  
Yehhhhhh… *you are a champ* 🏆

---

## 🧠 Step 2: What Did You Actually Do?

You didn’t use any algorithm.  
You simply:

- Looked at **every possible continuous part**
- **Calculated the sum**
- **Picked the biggest one**

👉 This action is called **Brute Force**

---

## 🔑 What is Brute Force?

> **Brute Force** =  
> “Try all valid possibilities and choose the best one.”

No tricks.  
No shortcuts.  
Just correctness.

---

## 🧩 Step 3: Turn Thinking into Clear Steps

For a general array, your thinking becomes:

1. Pick a **start index**
2. Pick an **end index**
3. Add elements between them
4. Track the **maximum sum**

That’s it.  
✨ **No magic involved.**

---

## 🧪 Step 4: Brute Force Pseudocode (Readable)

```text
maxSum = -infinity

for i = 0 to n-1:        // start index
    for j = i to n-1:    // end index
        sum = 0
        for k = i to j:  // add elements
            sum += arr[k]
        maxSum = max(maxSum, sum)

return maxSum
```
## ⏱️ Step 5: Time & Space (Just Observe)

 - Three loops → slow
 
 - But correct

Complexity:

  - Time: O(n³)

  - Space: O(1)

📌 Interviewers respect this if you explain it clearly and honestly.



## 🟢 Mini Win (Very Important)

You have now:

✅ Understood the problem meaning

✅ Solved it as a human

✅ Seen how thinking becomes code

That is progress, even if it didn’t feel exciting.

But A Question , is it the best Way to Get Ans?
[Optimized Brute Force](./Optimized_Brute_Force.md) | Improve brute force using constraints |