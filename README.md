# Basic Algorithms and Data Structures in Javascript

- Data Structures: 
	- linked list
	- hash table
	- binary search tree
	- stack
	- queue

- Searching Algorithms: 
	- linear search
	- binary search

- Sorting Algorithms: 
	- bubble sort
	- quick sort
	- merge sort
	- selection sort

- Dynamic Programming
	- Memoization

- Stack and heap of computer

- Time and space complexity analysis

------

### Sorting algorithms

#### Time Complexity
1. Bubble sort: O(n2
2. Selection sort : O(n2)
3. Merge sort O(nlogn)
4. Quick sort worst: O(n2), average: O(nlogn

There is a trade off between time and space complexity.

### Time complexity analysis

[Details](https://www.youtube.com/watch?v=v4cd1O4zkGw)

#### 1. Different steps get added

if you have two or more different operations, these are summed up.

```python
for i in range(A):
	print(i)
for k in range(B):
	print(k * 2)
```

O(A+B) -> O(n) linear time

#### 2. Drop constants

```python
for i in range(A):
	operation1(i)
for k in range(A):
	operation2(k)
```
is O(A+A) -> O(n) and

```python
for i in range(A):
	operation1(i)
	operation2(i) 
```
is O(n) and they are the same.

#### 3. Different inputs, different variables

```python
def intersectionSize(arrayA, arrayB):
	count = 0
	for a in arrayA:
		for b in arrayB:
			if a == b:
				count += 1

```
Time complexity is O(a*b)

#### 4. Drop non-dominant terms

O(n2 + n) -> O(n2)


