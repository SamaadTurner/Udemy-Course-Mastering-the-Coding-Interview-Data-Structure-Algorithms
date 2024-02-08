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