

# Learn JavaScript With me....


<p>Beginning in 1997, JavaScript has evolved into many versions.</p>
<p>ECMAScript is a standard on which JavaScript is based!<p>

# ECMAScript
<P>ECMAScript1 or ES1 was first released in 1997.</P>
<P>ECMAScript 2015 also known as ES6 was released in 2015 and a major revision to JavaScript was made.</P>
<P>The latest version of JavaScript will be ECMaScript2022 (ES13) in 2022.</P>
<p>It was created to ensure that different documents on JavaScript are talking about the same language.</p>
<h2>Introduction</h2>
<P>JavaScript is a lightweight, OOP language. It is a scripting language for web pages.It is used to add interactivity and dynamic effects to web pages.Nowadays used in server-side development.</P>

# Variables
<p>In JavaScript, variables are used to store data.hey allow you to store, retrieve, and manipulate data in your programs. three ways you can declare a valu</p>
<br>
<ol>
<li>var</li>
<li>let</li>
<li>const</li>
</ol>

# Data Type in JavaScript
<p>there are several data types that you can use to store different types of data.</p>
<ul>
<li>Numbers (e.g. 10, 3.14)</li>
<li>Strings (e.g. "hello", 'world')</li>
<li>Booleans (e.g. true, false)</li>
<li>Arrays (e.g. [1, 2, 3])</li>
<li>Objects (e.g. { name: "John", age: 30 })</li>
</ul>

# Variable Naming Rules
<p>Variable names can only contain letters, digits, underscores, and dollar signs.Variable names cannot start with a digit.Variable names are case-sensitive.</p>
 
 # Primitives and Objects
 <p>here are two main types of data: primitives and objects.</p>
 <h2>Primitives--></h2>
 <ul>
    <li>Numbers (e.g. 10, 3.14)</li>
    <li>Strings (e.g. "hello", 'world')</li>
    <li>Booleans (e.g. true, false)</li>
    <li>Null (a special value that represents an absence of value)</li>
    <li>Undefined (a special value that represents an uninitialized variable)</li>
</ul>
<p>Primitives are immutable, which means that once they are created, they cannot be changed</p>

<br>
 <h2>-->Objects</h2>
    <p>Objects are more complex data types in JavaScript and are used to represent real-world objects or abstract concepts. They are composed of key-value pairs, where the keys are strings and the values can be any data type (including primitives and other objects).
    <br>
    Objects are mutable, which means that they can be changed after they are created</p>

# Operators and Expressions 
<p>Operators in JavaScript are symbols that perform specific operations on one or more operands (values or variables). For example, the addition operator (+) adds two operands together and the assignment operator (=) assigns a value to a variable.</p>
<ul>
    <li>Arithmetic operators (e.g. +, -, *, /, %)</li>
    <li>Comparison operators (e.g. >, <, >=, <=, ==, !=)</li>
    <li>Logical operators (e.g. &&, ||, !)</li>
    <li>Assignment operators (e.g. =, +=, -=, *=, /=)</li>
    <li>Conditional (ternary) operator (e.g. ?:)</li>
</ul>

# var vs let vs const
<p> Each of these keywords has its own rules and uses, and it is important to understand the differences between them in order to write effective and maintainable code.</p>
<h2>var</h2>
<p>he var keyword is used to declare variables in JavaScript. It was introduced in the early days of the language and was the only way to declare variables for a long time. However, the var keyword has some limitations and has been largely replaced by the let and const keywords in modern JavaScript.One of the main issues with var is that it is function-scoped, rather than block-scoped. This means that variables declared with var are accessible within the entire function in which they are declared, rather than just within the block of code in which they appear. This can lead to unexpected behavior and can make it difficult to reason about the scope of variables in your code.</p>
<h2>let</h2>
<p>The let keyword was introduced in ECMAScript 6 (also known as ES6) and is used to declare variables that can be reassigned later. let variables are block-scoped, which means that they are only accessible within the block of code in which they are declared. This makes them more predictable and easier to reason about than var variables.</p>
<h2>Conts</h2>
<p>The const keyword was also introduced in ES6 and is used to declare variables that cannot be reassigned later. const variables are also block-scoped and behave similarly to let variables in that respect. However, the main difference is that const variables must be initialized with a value when they are declared and cannot be reassigned later.</p>

# conditional
<h2>If else</h2>
<p>he "if" statement in JavaScript is used to execute a block of code if a certain condition is met. The "else" clause is used to execute a block of code if the condition is not met.</p>
<h2>If else ladder | Nested If</h2>
<p>The "if-else ladder" is a control structure in JavaScript that allows you to execute a different block of code depending on multiple conditions. It is called a ladder because it consists of multiple "if" and "else" statements arranged in a ladder-like fashion.</p>
<h2>Switch Case</h2>
<p>The "switch" statement in JavaScript is another control structure that allows you to execute a different block of code depending on a specific value. It is often used as an alternative to the "if-else ladder" when you have multiple conditions to check against a single value.</p>
<h2>Ternary Operator</h2>
<p>The ternary operator is a shorthand way to write an if-else statement in JavaScript. It takes the form of condition ? value1 : value2, where condition is a boolean expression, and value1 and value2 are expressions of any type. If condition is true, the ternary operator returns value1; if condition is false, it returns value2.</p>

# Loop

<h2>For Loop</h2>
<p>For loops are a common control flow structure in programming that allows you to repeat a block of code a specific number of times. In JavaScript, there are three types of for loops: the standard for loop, the for-in loop, and the for-of loop.</p>
<h2>For-of loop</h2>
<p>The for-of loop is used to iterate over the values of an iterable object, such as an array or a string. It has the following syntax</p>
<h2>While Loop</h2>
<p>While loops are a control flow structure in programming that allow you to repeat a block of code while a certain condition is true. In JavaScript, the syntax for a while loop is</p>

# Functions
<p>JavaScript functions are blocks of code that can be defined and executed whenever needed. They are a crucial part of JavaScript programming and are used to perform specific tasks or actions.

Functions are often referred to as "first-class citizens" in JavaScript because they can be treated like any other value, such as a number or a string. This means that they can be assigned to variables, passed as arguments to other functions, and returned as values from functions.

Here's the basic syntax for defining a function in JavaScript:</p
<img src="/img/func1.png">
<p>The functionName is a unique identifier for the function, and the parameters are the variables that are passed to the function when it is called. These parameters act as placeholders for the actual values that are passed to the function when it is executed.<br>Here's an example of a simple function that takes a single parameter and returns the square of that number:</p>
<img src="/img/func2.png">
<p>To call this function, you would simply use the function name followed by the arguments in parentheses:</p>
<img src="/img/func3.png">
<p>Functions can also have multiple parameters, like this:</p>
<img src="/img/func4.png">
<p>In this case, the add function takes two parameters, x and y, and returns their sum.<br>JavaScript also has a special type of function called an "arrow function," which uses a shorter syntax. Here's the same square function defined using an arrow function:</p>
<img src="/img/func5.png">
<p>Arrow functions are often used when you want to create a small, one-line function that doesn't require a separate function keyword.<br>Functions can be defined inside other functions, which is known as "nesting." This is useful for creating smaller, reusable blocks of code that can be called from within the larger function.</p>
<img src="/img/func6.png">
<p>In this example, the innerFunction is defined inside the outerFunction and can only be called from within that function.</p>

# Strings

<p>A string in JavaScript is a sequence of characters enclosed in either single or double quotes. For example.<br>"Hello World" , 
'Hello World'<br>JavaScript provides a number of built-in methods for manipulating strings. Some of the most commonly used string methods are: </p>
<ol>
    <li>length </li>
    <li>concat </li>
    <li>indexOf </li>
    <li>slice </li>
    <li>replace </li>
    <li>toUpperCase </li>
    <li>toLowerCase </li>
</ol>
<p>length - This method returns the number of characters in a string.
<br>
concat - This method is used to concatenate (combine) two or more strings.<br>
indexOf - This method is used to find the index of a specific character or substring in a string.<br>
slice - This method is used to extract a portion of a string.<br>
replace - This method is used to replace a specific character or substring in a string.<br>
toUpperCase and toLowerCase - These methods are used to convert a string to uppercase or lowercase letters.
</p>

# Array and methods
<p>Array is a collection of elements. In this blog post, we will explore the basics of JavaScript arrays and the various array methods that can be used to manipulate them.<br>
Some of the most commonly used array methods are:</p>
<ol>
<li>length </li>
<li>push  </li>
<li>pop  </li>
<li>shift  </li>
<li>unshift  </li>
<li>slice  </li>
<li>Splice</li>
</ol>

<p>
ength - This method returns the number of elements in an array. 
<br>
push - This method is used to add an element to the end of an array. 
<br>
pop - This method is used to remove the last element of an array.
<br>
shift - This method is used to remove the first element of an array. 
<br>
unshift - This method is used to add an element to the beginning of an array.
<br>
slice - This method is used to extract a portion of an array.
<br>
splice - This method is used to add or remove elements from an array. 
</p>


# Loops with Arrays

<p>One of the most important data structures in JavaScript is the array, which is a collection of elements. When working with arrays, it is often necessary to iterate through each element in the array, which is where loops come in. In this blog post, we will explore how to use loops with arrays in JavaScript.

JavaScript provides several ways to iterate through an array, including the for loop, forEach method, and for...of loop.</p>

<ul>
<li>for loop - This is the most basic way to iterate through an array. The for loop uses a counter variable that is incremented on each iteration. </li>
<li>forEach method - This method is a more concise way to iterate through an array. The forEach method takes a callback function as its argument, which is called on each element in the array</li>
<li>for...of loop - This is a more recent addition to JavaScript, and it is the most concise way to iterate through an array. It allows you to iterate through the elements of an array without having to access the index, and it works with any iterable object, not just arrays</li>
</ul>

# Map, Filter and Reduce

<p>array, which is a collection of elements. When working with arrays, it is often necessary to manipulate the elements in various ways, which is where the built-in methods map, filter, and reduce come in. In this blog post, we will explore how to use these methods to manipulate arrays in JavaScript.</p>

<p>Map - The map method is used to create a new array with the result of a callback function called on each element in the original array. The callback function takes one argument, the current element, and returns the new value for that element.</p>
<img src="/img/map.png">

<p>Filter - The filter method is used to filter an array based on a certain condition. The filter method takes a callback function as its argument, which is called on each element in the array. If the function returns true, the element is included in the new filtered array.</p>
<img src="/img/filter.png.png">