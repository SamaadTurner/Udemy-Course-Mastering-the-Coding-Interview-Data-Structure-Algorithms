# What I did:

## Day 1:

### Key takeaways
- Talked about all the things non technical that is considered in the interview. Those things are resume, github, and things pertaining to that. I need to do some more open-source contributions (ZTM has a section that has many projects where I can do that).
- I have done many thiings from the bootcamp that this course is saying that I should do like create a website (use the mashup-template)(look at github).
- Add LaLa Photobooth to my resume as job history and also add it as a project on my resume. For the job history, talk about how long it took and the deadlines i had to make
- Best way to get hired: referals (networking).

- Resource: email template 
- | Hey $BOB,
    I saw your presentation at $CONFERENCE last year on Youtube (rr point to some work they have done).
    Great stuff; loved what you did with $FOO, in particular
    $COMMENT_PROVING_YOU_KNOW_WHAT_YOU'RE_TALKING_ABOUT.
    I'm also a $FOO developer. I noticed that your company is hiring
    or $ROLE. I’d love to be a part of your team. Do you have a
    few minutes to chat on Thursday about what you guys are doing?
    
    Thanks,
    Yourname
    Your website or any public profile link

- to find recruitors of the different companies use this search: "site:linkedin.com [enter company name] recruitor"
- APPLY TO JOBS WHERE THE DESCRIPTIONS SHOW TOOLS YOU'VE NEVER SEEN. YOU WILL GROW AT THAT JOB!.

## Day 2:

### Key takeaways

- Big O Notation: Tells you how well (how fast) a problem is solved.
- (navigate to bigO folder to see the exercises)
- Rules for Big O notation:
- Rule 1: Worse Case  
- Rule 2: Remove Constants
- Rule 3: Different terms for inputs
- Rule 4: Drop Non Dominants

## Day 3:
- Finished up Big O

## Day 4:
- What causes space complexity? -
- Variables
- Data Structures
- Function Call
- Allocations

If I get asked what time complexity of a built in method is, the answer is that it "Depends on the language you are using the built in method in".

BIG O section summary:

- Big O is used to describe how efficient we can run our code (which saves companies money)
- When it comes to 'Good code' we are concern with readability and scalability. Big O allows us to measure scalability.
- Knowing how long your code takes to run and how much memory it takes is very important.
- Time complexity: How long it takes your code to run
- Space complexity: The memory that is required by the code

## What are companies looking for?
1. Analytic Skills: How can you think through a problem and analyze them 
2. Coding Skills: Do you code well? Is it clean and readable?
3. Technical Skills: Do you know the fundamentals?  
4. Communication Skills: Can you communicate well with other people? Do you fit?

## Technical Interview Section
- The key in this section is the cheat sheet (provided by the course). Write everything out! Go step by step.

## Day 5: Data Structures + Algorithms

- Start of Data Structures and Algorithms:
- What is a data structure? A way of arranging and storing data (numbers, strings, booleans, etc.) to make it easier to use in computer programs.
- Examples: Arrays, linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables, Heaps, etc.
- What is an Algorithm? An algorithm is a set of step-by-step instructions for solving a specific problem or performing a task.
- Examples: Sorting, Dynamic Programming, Breadth First Search, Depth First Search, Recursion, etc.

## Arrays:
- organizes items sequentially in memory.
- ex: const strings = ['a', 'b', 'c', 'd'];
- Methods we have that are built in for arrays:
- .push: strings.push('e'); --> adds 'e' to the end of the array. In O(1)
- .pop: strings.pop(); --> removes last item from array. In O{1}.
- strings.unshift('x') --> adds 'x' at the BEGINNING of our array. In O(n)
- .splice: strings.splice(starting index, 0, 'what you add') --> adds string to middle of array. In O(n)

### Arrays: Static vs Dynamic

- Static is fixed size.
- Dynamic allow us to copy and rebuilt an array at a new location (xpands as you add more elements).

## Classes in JS

3 important things with objects:
- reference type:
Primitive types are defined by JS.
Reference types are created by me, the programmer.

- context:
Tells you where you are within the object.
'this' refers to what object its inside of.

- instantiation: making copies of an object:
class Player {
    // every time i make a Player copy, it will have a name and type property (i give whatever name or player I want). It will also have the introduce() method. THIS IS THE BLUEPRINT FOR A Player.
    constructor(name, type){
        this.name = name;
        this.type = name;
    }
    introudct(){
        // when you want to access a property within the constructor, you must use the keyword 'this'.
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
    }
}

Here is another example:


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.introduce(); // Outputs: Hi, I'm Alice and I'm 25 years old.
person2.introduce(); // Outputs: Hi, I'm Bob and I'm 30 years old.


notes:

- We have a Person class with a constructor that initializes the name and age properties.
- The introduce method is used to log a message introducing the person, utilizing the name and age properties.
- Two instances of the Person class (person1 and person2) are created with different data.
- When calling the introduce method on each instance, it correctly outputs the introduction for each person.
- This example demonstrates how classes and the this keyword can be used to model real-world entities with shared behavior (methods) and individual characteristics (properties). Each instance of the class represents a specific person with its own set of data.


* With all that said, lets say i want to create a 'SPECIAL' person that  has all the qualities of the Person class AND then some special qualities. We need to EXTEND the Person class.
* ANY TIME WE EXTEND, WE NEED TO CALL THE CONSTRUCTOR FUNCTION FROM THE CLASS YOU ARE EXTENDING AND PASS THE CONSTRUCTOR PROPERTIES FOR THAT CLASS (IN THIS CASE, IT IS THE Player class). USE THE 'SUPER' KEYWORD.

ex:

class SpecialPerson extends Player {
    constructor (name, type){
        super(name, type)
    }
    // new stuff for this special player
    play(){
        console.log(`WEEEEEEEEEE, I'm a ${this.type}`);   
    }
}

// creating wizard players
const wizard1 = new Wizard('Sam', 'Dark Magic');
const wizard2 = new Wizard('Jocelyn', 'Healer');


## ***************************** ARRAYS ***************************** 
 Methods are: functions within a class.
* refer to the array folder for code. *
- Notes:
- Treat any string interview question like it is an array question because STRINGS ARE SIMPLY ARRAY OF CHARACTERS.
EX: q: reverse a string:

How I should be thinking:

1. convert the string to an array of characters
2. Do a loop over the array of characters ('split()')
3. Return as a string after all operations performed


Interview Q 2:
Ex: Given Two Arrays that are sorted, can you merge these two arrays into one big one that is still sorted

How I should be thinking:

1. Pointers: Create two pointers (one for each array) that will help you traverse through each array.
2. Compare elements at the current postions of the pointers. Add small element to the merged array
3. Move pointers; move the pointer of the array from which you added the element from the merged array. Continue the process until you reach the end of one of the arrays.
4. Handle the remaining elements: If one array still has elements, add them to the merged array since they are already sorted.

### When Should I use Arrays?
- Fast look ups
- Fast push/pop
- Ordered

### Disadvantages
- Slow inserts (because we have to shift the entire array)
- Slow deletes
- Fixed Size (have to declare ahead of a time in a fixed array)



## Hash Tables

- Hash Tables are just objects.
- The objects properties and their corresponding values (key-value) are stored in a way that allows for efficient retrieval and storage. 
- Methods:
  - insert: BigO: O(1)
  - lookup: BigO: O(1)
  - delete: BigO: O(1)
  - search: BigO: O(1)
### Overview

Key-Value Pairs: A hash table is a data structure that stores key-value pairs. In JavaScript, objects are used for this purpose.

#### Hashing Functions 
- When you assign a value to an object property, JavaScript internally uses a hashing function to convert the key (property name) into a hash. This hash is used to efficiently locate the memory location where the corresponding value is stored

#### Fast Access
- The use of a hashing function allows for fast access to values. Instead of iterating through a collection of items, JavaScript can directly compute the hash and quickly locate the value associated with a given key.

#### Hash Collisions
- Occurs when two different keys hash to the same index or bucket. The hash function produces the same hash value for two distinct keys. 
- This can lead to complications in hash table implementations because the hash table needs to store multiple key-value pairs at the same location

-RESOLUTION: 
- Seperate Chaining: Each bucket in the hash table is associated with a data structure, often a linked list. Colliding keys are stored as nodes in the linked list at the corresponding bucket. While this method is simple, it may lead to degraded performance if the linked lists become too long.
- Open Addressing: Instead of using separate data structures for collisions, this approach involves finding the next available slot in the hash table when a collision occurs. There are various techniques within open addressing, such as linear probing (checking the next slot), quadratic probing (checking slots with quadratic increments), or double hashing (using a second hash function).


#### Why Hash Tables?

- Hash tables are efficient for searching and retrieving data, making them suitable for applications where quick data retrieval is crucial, such as databases.
- They are well-suited for scenarios where quick access to specific values based on a key is essential.

#### Hash tables vs Arrays

- Hash tables store data in key-value pairs, allowing for efficient retrieval based on a unique key.
- Hash tables can dynamically resize themselves to accommodate an increasing number of elements, helping to maintain efficiency.
- Hash tables do not inherently maintain the order of elements. The order in which elements are stored is not guaranteed to be the order in which they were inserted.

- Arrays store elements in a sequential manner, providing direct access to elements through their indices.
- The order of elements in an array is maintained, and elements can be accessed sequentially or directly using their indices.
- Arrays typically have a fixed size, and resizing may involve creating a new array and copying elements, which can be less efficient.
- Accessing elements in an array is straightforward using the index, making it efficient for scenarios where sequential access or direct indexing is required.
- ** In summary, hash tables are powerful for quick and efficient access to specific values based on keys, especially in scenarios like databases. Arrays, on the other hand, provide direct and ordered access to elements through indices and are suitable for scenarios where the order of elements is significant. The choice between them depends on the specific requirements of the use case.


## LinkedLists

- a linked list consists of nodes where each node contains data and a reference (or link) to the next node in the sequence.
- Node:  Each element in a linked list is represented by a node. A node contains two fields - one for storing data and another for storing the reference (or link) to the next node in the sequence.
- The HEAD is a reference to the first node in the linked list. It serves as the starting point for traversing the list.
- The TAIL is the last node in the linked list. The reference in the tail points to null, indicating the end of the list.
- Pros: Fast insertion, Fast Deletion, Ordered, Flexible Size, Simplicity
- Cons: Slow Look ups (have to traverse through lists to search something... no key or indexes), More Memory
  

#### Singly Linked List
- Each node has a data field and a link/reference to the next node in the sequence.

#### Doubly Linked List
- Each node has a data field and two links/references - one pointing to the next node and another pointing to the previous node in the sequence.

## What is a Pointer?

- a reference to another place (or object or node or etc) in memory.
ex: 
const obj1 = { a : true};
const obj2 = obj1;  <---- a reference to object1 (not creating a new object but yet pointing to that location that was already created in memory). 


#### Doubly Linked Lists

- each node contains a value and TWO POINTERS (ONE POINTING TO THE NODE IN FRONT AND ONE POINTING TO THE ONE IN THE BACK).
- It allows us to traverse list backwards
  
## Singly vs Double LinkedLists
- Singly Linked List Advantages:
  - Memory Efficiency: Singly linked lists typically use less memory than doubly linked lists because they require only one pointer per node (pointing to the next node).
Simplicity: Implementation and manipulation of singly linked lists are often simpler and require less overhead.
- Singly Linked Lists Disadvantages:
  - Limited Traversal: Traversal can only be done in one direction (from the head to the tail), which might be a limitation in certain scenarios.
Backtracking Complexity: Backtracking (traversing in reverse) is not efficient and may require additional data structures or workarounds.

- Doubly Linked List Advantages:
  - Bidirectional Traversal: Doubly linked lists allow for efficient traversal in both forward and backward directions.
Ease of Deletion: Deleting a node in a doubly linked list is more straightforward since you can directly access the previous node.

- Doubly Linked List Disadvantages:
  - Increased Memory Usage: Doubly linked lists use more memory because each node requires an additional pointer (for the previous node).
Complexity: Implementation and manipulation are generally more complex than singly linked lists.

## When to use Singly Linked Lists or Doubly Linked Lists

- Singly linked Lists when:
    - Memory efficiency is crucial.
    - You mainly need to traverse the list in one direction.
    - The simplicity of implementation is a priority.

- Doubly linked Lists when:
    - Bidirectional traversal is required.
    - Efficient deletion of nodes is a common operation.
    - The advantages outweigh the increased memory usage and complexity.


## Stacks (LIFO)

- The last element added is the first one to be removed. Think of it like a stack of plates in a cafeteria; you add a new plate to the top, and when you need to remove one, you take it from the top.
- Can be implemented with an array or linked list
- Implementing with arrays allow cache locality (makes them faster than linked list when trying to access things in memory because they are right next to each other)
- linked list have more dynamic memory. We csn keep adding to the linked lists without having to do a lot like if i was using nn array.
 
* use when:
- If you need to access the most recently added elements first.
- Examples include managing function calls (call stack) in programming languages, undo mechanisms, and parsing expressions.
- Stacks are often more memory-efficient than queues as they don't require pointers for backtracking.
- When you need to keep track of the history of decisions or states.
Stacks are commonly used in DEPTH-FIRST search algorithms.


## Queues (FIFO)

- The first element added is the first one to be removed. Think of it like a line of people waiting for a bus; the person who arrives first is the first to board the bus.
- Always use a linked list to implement because: Unlike arrays, linked lists can dynamically adjust in size. In arrays, the size is typically fixed, and resizing can be a costly operation. Linked lists allow you to allocate and deallocate memory as needed, making them more flexible for managing dynamic data.

* use when:
- If you need to process elements in the order they were added.
- Examples include task scheduling, print job management, and breadth-first search algorithms.
- When tasks need to be completed in a sequential order, and new tasks are continuously added to the queue.
- When tasks can be processed simultaneously, and the order of completion is important.
- Queues are commonly used in BREADTH-FIRST search algorithms.


## Trees

-Composed of nodes, where each node has a parent-child relationship with other nodes. There are various types of trees used in computer science
- can have 0 or more children
- Start at a root node, and every child of a node descends from only one parent.
- O(log n): 


#### Binary Tree

- Each node has AT MOST 2 dhildren (0, 1 or 2): a left child and a right child.
- Common operations include: IN-ORDER TRAVERSAL, PRE-ORDER TRAVERSAL, AND POST-ORDER TRAVERSAL,


#### Binary Search Tree

- Each node has at most two child nodes
- All nodes in its right subtree have keys greater than the node's key.
- Both the left and right subtrees are also Binary Search Trees
- This arrangement allows for efficient searching, insertion, and deletion operations. Because of the ordering of elements, searching for a specific value involves navigating through the tree by comparing the target value with the values in the nodes and deciding whether to continue the search in the left or right subtree.
- Still can traverse like a regular BT.

WHY SHOULD I USE A BST:
- Ordered Data Storage: BSTs inherently maintain order, allowing for efficient retrieval of elements in sorted order. This is advantageous if you often need to iterate through elements in a specific sequence.
- Efficient Search Operations: Searching in a BST has an average time complexity of O(log n), where n is the number of elements. This makes BSTs suitable for applications where quick search operations are crucial.
- Dynamic Insertion and Deletion: BSTs support dynamic insertion and deletion operations while maintaining their ordered structure. This makes them well-suited for scenarios where data is frequently updated.
- Memory Efficiency: Compared to other ordered data structures like sorted arrays, BSTs can provide memory efficiency as they don't require contiguous memory allocation. This is especially beneficial when dealing with dynamic datasets.
- Balanced Variants for Predictable Performance: Balanced BSTs, such as AVL trees or Red-Black trees, ensure that the tree remains balanced, leading to predictable and optimal performance for various operations. This is particularly important in scenarios where worst-case time complexity matters.

#### Balanced vs Unbalance BST

- A balanced BST is a tree where the left and right subtrees of every node have similar heights, ensuring that the tree is relatively evenly distributed. This balance helps maintain a logarithmic height, providing efficient search, insert, and delete operations. Examples of balanced BSTs include AVL trees and Red-Black trees.
- An unbalanced BST has an uneven distribution of nodes, leading to one subtree being significantly larger than the other. This can result in a skewed structure, especially when nodes are inserted in sorted order. In the worst case, an unbalanced BST may degenerate into a linked list, causing inefficient operations.


#### AVL Tree

- A self-balancing binary search tree, where the height of the two child subtrees of any node differs by at most one. In other words, it ensures that the tree remains approximately balanced, preventing it from becoming skewed or degenerating into a linked list.
- The balance factor of a node in an AVL tree is defined as the difference between the heights of its left and right subtrees. If this balance factor is greater than 1 or less than -1, the tree is considered unbalanced, and ROTATIONS ARE PERFORMED to restore balance.

- Four possible rotations:
1. Left Rotation: Used to balance a right-heavy subtree.
2. Right Rotation: Used to balance a left-heavy subtree.
3. Left-Right Rotation (Double Right-Left): Combines a left rotation followed by a right rotation.
4. Right-Left Rotation (Double Left-Right): Combines a right rotation followed by a left rotation.

- Cons of an AVL Tree:
- The additional overhead of maintaining balance can result in slightly slower performance compared to simpler data structures like regular binary search trees in scenarios where frequent insertions and deletions are not critical.


#### Red-Black Tree

- A Red-Black Tree is a self-balancing binary search tree that maintains balance through the use of color-coding on its nodes. 
  
- Balancing Rules: 
1. Every node is either red or black.
2. The root is always black.
3. Every leaf (null) is black.
4. If a red node has children, both are black.
5. Every simple path from a node to its descendant leaves contains the same number of black nodes. This property ensures that the tree remains balanced.

When to use:
-  Red-Black Trees are often favored in scenarios where insertions and deletions are more frequent, and the additional balancing constraints of AVL trees are not critical for performance.

#### Binary Heap
- A binary heap is a nearly complete binary tree (a binary tree filled from left to right on each level, with the last level possibly partially filled) that satisfies the heap property. The heap property differs for two types of heaps: max heap and min heap.

- Max Heap: 
- In a max heap, for every node 'i' other than the root, the value of 'i' is less than or equal to the values of its children. In simpler terms, the maximum value is at the root, and each parent node has a value greater than or equal to its children.

- Min Heap:
- In a min heap, for every node 'i' other than the root, the value of 'i' is greater than or equal to the values of its children. The minimum value is at the root, and each parent node has a value less than or equal to its children.

When to use:

- Binary heaps are commonly used in priority queues and heap sort algorithms due to their efficient extraction of the maximum or minimum element. The structure of a binary heap allows for quick access to the extreme values, and operations like insertion and deletion are relatively efficient.


#### Priority Queue
- Each element has a priority. Elements with a higher priority get served before elements with a lower.
- A priority queue is an abstract data type that stores a collection of elements, each associated with a priority or key, and supports two primary operations: insertion (enqueue) and removal of the element with the highest priority (dequeue). 
- The element with the highest priority is typically the one with the minimum or maximum key, depending on the priority queue's configuration.

- Key characteristics of a priority queue:
  
1. Ordering: Elements are ordered based on their priority or key.
2. Access: The highest-priority element is efficiently accessible.
3.Operations:
Enqueue (LEFT-RIGHT Insertion): Adding an element to the priority queue.
Dequeue (Removal): Removing the element with the highest priority.

When to use:

- Priority queues find applications in various algorithms and scenarios where elements need to be processed in order of priority. Examples include task scheduling, Dijkstra's shortest path algorithm, Huffman coding, and more. They provide a flexible and efficient way to manage elements based on their relative priorities.

#### Trie (prefix tree)
- A tree-like data structure (not a tree exactly because it can have an infinity amount of children) that is used to store a dynamic set or associative array where the keys are usually sequences, such as strings. It is particularly efficient for tasks that involve matching, searching, and retrieval operations on strings.
- Allows you to know if a word or part of a word exists in a body of text.
- This tree like data structure is like auto-completion on your phone. Good for searching words in a dictionary providing auto suggestion. The root node of a subtree usually is a letter and the children on both left and right may complete a word with that root letter.

## Graphs

- A graph is a mathematical and abstract data structure that consists of a set of nodes (vertices) and a set of edges connecting pairs of nodes. Each edge represents a relationship or connection between two nodes. Graphs are commonly used to model relationships in various real-world scenarios, such as social networks, transportation systems, computer networks, and more.
- Key component of a graph:
1. Vertices (Nodes): Represent entities or points in the graph.
2. Edges: Connect pairs of vertices and represent relationships or interactions.

#### Types of graphs
Direction: 
1. Undirected Graphs: Edges have no direction, meaning the connection between two vertices is symmetric.
2. Directed Graphs (Digraphs): Edges have a direction, indicating a one-way relationship between vertices.

Weight:
1. Unweighted Graphs: In an unweighted graph, each edge is considered to have equal importance or cost, and no numerical values (weights) are assigned to the edges. It only indicates the presence or absence of a connection between vertices.
2. Weighted Graphs: In a weighted graph, each edge has a numerical weight that represents a quantitative measure of the relationship between the connected vertices. The weights can represent distances, costs, time, or any other relevant metric.

Shape:
1. A CYCLIC graph contains at least one cycle. There exists a sequence of vertices such that there is an edge from each vertex to the next, and the last vertex has an edge back to the first, forming a cycle.
2. An ACYCLIC graph does not contain any cycles. It can be either a directed acyclic graph (DAG) or an undirected acyclic graph. 


* When to use:
- Weighted graphs are commonly used to model scenarios where the cost or distance between connected nodes is significant (google maps trying to find fastest route to destination)
-  Algorithms for weighted graphs often involve finding paths or subgraphs that minimize or maximize the total weight, such as finding the shortest path in a network or identifying the minimum spanning tree. Dijkstra's algorithm and Prim's algorithm are examples of algorithms designed for weighted graphs.


# ALGORITHMS


## Recursion
- Recursion is a programming concept where a function calls itself in its own definition. In other words, a recursive function is a function that solves a problem by solving smaller instances of the same problem.
- A function that refers to itself inside of a function.
- Good to use for tasks have many repeated subtasks to do.
- Computer needs to allocate memory for recursion. Tend to have stack overflows if not implemented right (need a base case to stop it)

### Base Case
- a base case is a condition or set of conditions that defines when the recursive function should stop calling itself and return a result directly, without making further recursive calls. 


## Iterative
-  involves repeating a set of instructions or a block of code multiple times.

### Two main types of iteration
1. Definite Iteration(FOR LOOP):
- Used when then number of iterations is known in advance
- The loop has a fixed number of iterations

2. Indefinite Iteration(or "while" loop):
- Used when the number of iterations is not known in advance.
- The loop continues as long as a certain condition is true.

## When to use Iteration vs Recursive
### Iteration When:
1. Performance Matters:
  - Iterative solutions can be more efficient in terms of both time and space complexity, as they don't involve the overhead of function calls and maintaining a call stack.
  
2. Readability and Simplicity:
  - For some problems, an iterative solution might be more straightforward and easier to understand, especially for programmers who are more accustomed to iterative constructs like loops.

3. Tail Call Optimization is Unavailable:
  - In languages that don't support tail call optimization, using recursion excessively may lead to stack overflow errors. In such cases, iteration might be a safer choice.

4. State Manipulation:
  - Problems that involve state manipulation, such as updating variables or working with mutable data structures, often lend themselves well to iteration.


## Recursion When:
Note: use when doing BFS AND DFS
1. Problem Has a Recursive Structure:
  - If the problem can be naturally divided into smaller subproblems that are similar to the original problem, recursion can provide an elegant and concise solution.

2. Readability and Conceptual Simplicity:
  - Recursive solutions can sometimes be more intuitive and closer to the problem's description. Problems that have a recursive definition or structure may benefit from a recursive implementation.

3. No Need for Explicit State Management:
  - Problems that don't require explicit state management and can be solved by breaking them down into smaller instances of the same problem are good candidates for recursion.

4. Tail Call Optimization is Available:
  - In languages that support tail call optimization, the risk of stack overflow is reduced, making recursion a more viable option

* ANYTHING YOU CAN DO WITH RECURSION CAN BE DONE ITERATIVELY (LOOP)

# Sorting

## Concept of Swapping

let temp = a;  // Store the value of 'a' in 'temp'
a = b;         // Assign the value of 'b' to 'a'
b = temp;      // Assign the original value of 'a' (stored in 'temp') to 'b'

### Detailed Breakdown

temp = a; // Store the original value of a (which is 5) in a temporary variable called temp.

a = b; // Assign the value of b (which is 10) to a. Now, a has the value of b.

b = temp; // Assign the original value of a (which was stored in temp and is 5) to b. Now, b has the original value of a.

After these operations, a will have the original value of b (10), and b will have the original value of a (5). This ensures a successful swap without losing any data.


## Bubble Sort
- Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

## Selection Sort
- that sorts an array by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning. The process is repeated until the entire array is sorted.

## Insertion Sort
- A simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it performs well for small datasets or nearly sorted datasets.

## Divide and Conquer Sorting Alogrithms:

### Merge Sort
-  It works by dividing the unsorted list into n sub-lists, each containing one element (the base case), and then repeatedly merging sub-lists to produce new sorted sub-lists until there is only one sub-list remaining, which is the sorted list. It is a stable sorting algorithm and has a time complexity of O(n log n).
  
### Detailed Instuctions

- Divide: Divide the unsorted list into n sub-lists, each containing one element.

- Conquer: Repeatedly merge sub-lists to produce new sorted sub-lists until there is only one sub-list remaining.

- Merge: Merge two sub-lists into a single, sorted sub-list. This process is done recursively until there is only one sub-list.


## Quick Sort
- Works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The process is then repeated on each of the sub-arrays.
- The fastest on average. Downside, it has a bad worse case. If you cant gurantee a good pivot number selection, dont use this sort.

### Detailed Instructions

1. Choose a Pivot: Select an element from the array to act as the pivot. The choice of the pivot can significantly impact the algorithm's efficiency.
2. Partitioning: Rearrange the array elements in such a way that elements smaller than the pivot are moved to its left, and elements greater than the pivot are moved to its right. The pivot itself is in its final sorted position.
3. Recursion: Recursively apply the same process to the sub-arrays on the left and right of the pivot until the base case is reached. The base case is typically when the sub-array has zero or one element, in which case it is already sorted.
4. Combine: Combine the sorted sub-arrays to get the final sorted array.
  
