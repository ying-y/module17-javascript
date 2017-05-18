# Module 17: JavaScript
**JavaScript**  is a popular, high-level, general-purpose programming language primarily used for implementing interactive web applications and other information systems. JavaScript shares many structural (and even some syntactical) similarities with Python; the places where it differ often draws from other major major languages like Java and C (and thus are good styles to be familiar with). Overall, this makes JavaScript a useful second language to learn: programs will utilize similar structures, but demonstrate how code syntax can be abstracted in more general programming practices.

This module introduces the basic syntax of the JavaScript language, including variables, control structures, and functions. **Note** that this introduction assumes familiarity with Python, and introduces concepts in contrast to that languages. For more general purpose introductions, see the below resources.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Contents**

- [Resources](#resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Resources
As the language used for web programming, JavaScript may have more freely available online learning resources than any other language! Some of my favorites include:

- [A Re-Introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) a focused tutorial on the primariy language features
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) a free textbook covering all aspects of the JavaScript language. Very readable and thorough, with lots of good examples.
- [JavaScript for Cats](http://jsforcats.com/) a gentler introduction for "Scaredy-Cats"
- [w3Schools JavaScript Reference](https://www.w3schools.com/js/) a super-friendly reference for the language
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) a complete documentation of JavaScript, including tutorials
<!-- - [Google's JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) -->

## Programming with JavaScript
Like Python, JavaScript is a **high-level, general-purpose, interpreted programming language**. The biggest difference is where it is most commonly used: while the Python interpreter is installed on a computer and is usually accessed through the command-line (or through the Jupyter program), JavaScript interpreters are most commonly built into web browsers (such as Chrome or Firefox). Browsers are able to download scripts written in JavaScript, executing them line-by-line and using those instructions to manipulate what content is displayed.

- It is also possible to execute JavaScript code via the command-line by using [Node.js](https://nodejs.org/en/), allowing JavaScript to be a fully general language. However, it is still most commonly used inside the browser, which is how we will utilize it in this class.

### History and Versions
The JavaScript language was developed by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) (the co-founded of Mozilla) in 1995 while he was working for Netscape. The original prototype of the language was created in 10 days... a fact which may help explain some of the quirks in the language.

- Despite the names, _JavaScript_ and the _Java_ language have nothing to do with one another (and are in fact totally separate programming languages used in drastically different contexts). JavaScript was named after Java as a marketing ploy to cash in on the popularity of the latter.

Like Python, JavaScript continues to be developed through multiple versions, though _unlike_ Python these versions are all forwards compatible. Each new version of JavaScript includes additional syntax shorts, specialized keywords, and additional core functions. The main limitation on utilizing new JavaScript features is whether the _interpreters_ found in web browsers are able to support them. This module will use syntax and styles based on `ES5` (JavaScript 5), which was introduced in 2011 and is supported by all modern browsers.

- `ES6` was introduced in 2015 and provides features that work on [some browsers](http://kangax.github.io/compat-table/es6/), while `ES7` was finalized in 2016 but is not [reliably supported](http://kangax.github.io/compat-table/esnext/)

- Technically, JavaScript is an _implementation_ of the the [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) specification (which defines the structure and behaviors of multiple programming languages). Hence the `ES` in the version names.


### Running JavaScript
JavaScript scripts are executed in a web browser as part of the browser rendering a web page. Since browsers render HTML content (in `.html` files), JavaScript scripts are specified witin that HTML by using a `<script>` tag and specifying the _relative_ path to the script file (usually a **`.js`** file) to execute. When the HTML rendered (reading top to bottom) gets to that tag, it will download and execute the specified script file using the JavaScript interpreter:

```html
<script src="path/to/my/script.js"></script>
```

- The `<script>` tag can be included anywhere in an HTML page. Most commonly it is either placed in the `<head>` in order for the script to be executed _before_ the page content loads, or at the very end of the `<body>` in order for the script to be executed _afer_ the page content loads (and so can interact with that content).

- **IMPORTANT:** note that if you edit the `.js` script file, you will need to **reload** the page so that the browser can execute the script again (starting from the beginning, as if the page were viewed for the first time).

A webpage can include multiple `<script>` tags, each specifying their own script file. These scripts will be executed by the interpreter whenever they are encountered, top to bottom. And since variables and functions are usually defined _globally_, this means that any variables or functions created in one script will be available for use in the next (just like how variables created in one Jupyter cell are available in the next).

Thus additional JavaScript modules can be "imported" by including their script file as a `<script>` tag _before_ the script that need to use them (no explicitly `import` statement is necessary). These scripts will then make additional **global variables** available for use by later scripts.

- Moreover, rather than downloading third-party modules as part of a package like Anaconda, the path to third-party JavaScript modules are specified as an internet URI so that the module is downloaded along with the rest of the web page. For example:

  ```html
  <script src="https://d3js.org/d3.v4.min.js"></script>
  ```

  will "import" (download and include) the [D3](https://d3js.org/) library and provide a global `d3` variable for later scripts to use&mdash;similar to `import d3` in Python.

While JavaScript most commonly is used to manipulate the web page content and is thus pretty obvious to the user, it _also_ can produce "terminal-like" output&mdash;including printed text and **error messages**. This output can be viewed through the **JavaScript Console** included as a _developer tool_ in the Chrome browser (other browsers include similar tools):

![Accessing developer console](img/chrome-dev-console.png)

- **Important:** You should ___always___ have the JavaScript Console open when developing JavaScript code, since this is where any error messages will appear!

Finally, while a web browser is able to open any local `.html` file and run its included `.js` scripts, certain interactions (e.g., downloading data from the internet via an HTTP request) requires a web page to be provided from a _web server_ via the `http://` protocol, rather than the `file://` protocol. Luckily Python 3 provides a simple web server through the `http.server` module which you can use to "serve" the files to yourself:

```bash
# on the command-line:
cd path/to/project
python -m http.server
```

The served webpage will be available at <http://localhost:8000/> ("localhost" means "this machine").

- Be sure to `cd` to the directory that contains the `index.html` file&mdash;otherwise you will be serving from a different folder so will need to adjust the URL's path.
- The `-m` option mean to run the built-in module as script, instead of just importing it.
- I highly recommend you run a local web server whenever you are doing web development!


## JavaScript Basics
JavaScript scripts (`.js` files) have a similar overall structure to Python scripts: these files contain lines of code, each of which is a **statement** (instruction). The JavaScript interpreter executes each statement one at a time, top to bottom (responding to control structures and function calls of course).

Like Python, JavaScript code can include **comments**, which is text that is _ignored_ by the interpreter. JavaScript includes two kinds of comments:

- Anything written after two slashes  (`//`) until the end of the line is treated as an _inline comment_ and ignored.
- Anything written between `/*` and `*/` is treated as a _block comment_ and ignored. Block comments can span multiple lines.

```js
/* This is a block comment
   It can span multiple lines */
console.log('Hello world!');  //this is an inline comment (like # in Python)
```

The above example code demonstrates the **`console.log()`** function, which is JavaScript's equivalent to `print()`&mdash;the output will be shown in the JavaScript console (in the Developer Tools). Thus we talk about "logging out" values in JavaScript, instead of "printing" values in Python.

- The `console.log()` function is technically a `log()` method belonging being called on a global `console` object

Also notice that the example statement ends in a semicolon (**`;`**). All JavaScript statements end in semicolons, marking that statement as being finished (like a period in an English sentence). Unlike in Python, statements that do not end in semicolons can be allowed to continue onto the next line.

- Note that JavaScript tries to helpful and will often assume that statements end at the end of a line if the next line "looks like" a new statement. However, it occassionally screws up&mdash;and so best practice as a developer is to **always include the semicolons**.

### Strict Mode
ES5 includes the ability for JavaScript to be interpreted in [**strict mode**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode). Strict mode is more "strict" about how the interpreter understands the syntax: it is less likely to assume that certain programmer mistakes were intentional (and so try to run the code anyway). For example, in _strict mode_ the interpreter will produce an _Error_ if you try and use a variable that has not yet been defined, while without strict mode the code will just use an `undefined` value. This working in strict mode can help catch a lot of silly mistakes.

You declare that a script or function should be executed in strict mode by putting an interpreter declaration at the top:

```js
'use strict';
```

- This is not a String, but rather a _declaration_ to the interpreter about how it should be behave.

**ALWAYS USE STRICT MODE!** It will help avoid typo-based bugs, as well as enable your code to run more efficiently.

## Variables
JavaScript variables are **declared** using the `var` keyword. This is like creating the "nametag"; once it has been declared, new values can be assigned to that variable without further declaration. Declared variables have a default value of `undefined`&mdash;a value representing that the variable has no value (similar to `None` in Python).

```js
var x = 4;  //declare and assign value
var y = x;  //declare and assign value
x = 5;      //assign value to existing variable

console.log(x+', '+y);  //5, 4

var z;  //declare variable (not assigned)
console.log(z);  //undefined
```

JavaScript variables are conventually named using [camelCase](https://en.wikipedia.org/wiki/Camel_case): each word in the variable name is put together (without a separating `_`), with the first letter in subsequent words capitalized:

```js
var myVariable = 598;
var numberOfDaysInAYear = 365.25;
```

### Basic Data Types
JavaScript supports the similar basic data types as Python:

- [**Numbers**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) are used to represent numeric data (JavaScript does not distinguish between integers and floats). Numbers support most of the same _mathematical_ and operators as Python (you can't use `**` to raise to an exponent, and `//` is a comment not integer division). Common mathematical functions can be accessed through in the built-in [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) global.

  ```js
  var x = 5;
  typeof x;  //'number'
  var y = x/4;
  typeof y;  //'number'

  //numbers use floating point division
  console.log( x/4 );  //1.25

  //use the Math.floor() function to do integer division
  console.log( Math.floor(x/4) );  //1

  //other common Math functions available as well
  console.log(Math.sqrt(x));  //2.23606797749979
  ```

- [**Strings**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) can be written in either single quotes (**`'`**) or double quotes (**`"`**), but most [style guidelines](https://google.github.io/styleguide/jsguide.html) recommend single quotes. Strings can be concatenated (but not multiplied!)

  ```js
  var name = 'Joel';
  var greeting = 'Hello, my name is '+name; //concatenation
  ```

  Strings also support many [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) for working with them. Note that like Python, JavaScript strings are _immutable_, so most string methods return a new, altered string.

- **Booleans** in JavaScript are written in lowercase letters: `true` and `false`. Booleans can be produced using the same _relational operators_. However, the _logical operators_ used on booleans are written using symbols rather than words: two _ampersands_ (**`&&`**) mean "and", two _pipes_ (**`||`**) mean "or", and an exclamation point (**`!`**) means "not":

  ```js
  //conjunction
  boolOne && boolTwo //and (two ampersands)

  //disjunction
  boolOne || boolTwo //or (two pipes)

  //negation
  !boolOne //not (exclamation point)

  //combining
  A || !B      //A or not B
  !A && B      //not A and also B
  !(A && B)    //not (A and B both)
  (!A) || (!B) //not A or not B

  3 < x && x < 5 //not as cool as Python
  ```

#### Type Conversion
JavaScript is **very** flexible about applying operators across multiple types. When asked to operate on two disaprate types, the interpreter will _convert_ one of the operands (usually the second) into a type that "best fits" the operation. This is called **typecasting** (the value has been "cast" as a different type):

```js
'40' + 2  //402, the 2 is cast to a string
'40' - 4  //36, the '40' is cast to a number

var num = 10;
var str = '10';

num == str  //true, 10 and '10' can be cast into the same type
num === str  //false, 10 and '10' do not also have the same type
'' == 0   //true, both "falsey" values
0 == false  //true, both "falsey" values
```

The moral of the story: be careful about the types of your variables!

### Arrays
**Arrays** are _ordered, one-dimensional sequences of values_&mdash;very similar to Python lists. They are written as literals inside square brackets **`[]`**. Individual elements can be accessed by (0-based) _index_ using **bracket notation**.

```js
var names = ['John', 'Paul', 'George', 'Ringo'];
var letters = ['a', 'b', 'c'];
var numbers = [1, 2, 3];
var things = ['raindrops', 2.5, true, [5, 9, 8]];
var empty = [];

console.log( names[1] );  // "Paul"
console.log( things[3][2] );  // 8

letters[0] = 'z';
console.log( letters );  // ['z', 'b', 'c']
```

Note that it is possible to assign a value to _any_ index in the array, even if that index is "out of bounds". This will _grow_ the array (increase its length) to include that index&mdash;intermediate indices will be given values of `undefined`. Note that the _length_ of the array (accessed via the `.length` attribute) will always be the index of the "last" element + 1, even if there are fewer defined values within the array.

```js
var letters = ['a', 'b', 'c'];
console.log(letters.length);  // 3
letters[5] = 'f';  //grows the array
console.log(letters);  // [ 'a', 'b', 'c', , , 'f' ]
                       //blank spaces are undefined
console.log(letters.length);  // 6
```

Arrays also support a variety of [methods](https://www.w3schools.com/jsref/jsref_obj_array.asp) that can be used to easily modify their elements. Common _functional programming_-style methods are described below.

### Objects
**Objects** are _unordered, one-dimensional sequences of **key-value pairs**_&mdash;very similar to Python dictionaries. They are written as literals inside curly braces **`{}`**, with keys and values separated by colons **`:`**. Note that in JavaScript, string keys do _not_ need to be written in quotes (the quotes are implied&mdash;the keys are in fact strings).

```js
var ages = {sarah:42, amit:35, zhang:13};
var englishToSpanish = {'one':'uno', 'two':'dos'};
var numWords = {1:'one', 2:'two', 3:'three'};
var typeExamples = {integer:12, string:'dog', list:[1,2,3]};
var empty = {}
```

Object elements are also known as **properties**. For example, we say that the `ages` object has a `sarah` property (with a value of `42`).

Object values can be access via **bracket** notation, specifying the _key_ as the index. If a key does not have an explicit value associated with it, accessing that key produces `undefined` (the key's value is `undefined`).

```js
var favorites = { music: 'jazz', food: 'pizza', numbers: [12, 42]};

//access variable
console.log( favorites['music'] ); //'jazz'

//assign variable
favorites['food'] = 'cake';
console.log( favorites['food'] ); //'cake'

//access undefined key
console.log( favorites['language'] ); //undefined
favorites['language'] = 'javascript'; //assign new key and value

//access nested values
console.log( favorites['numbers'][0] ); //12
```

_Additionally_, object values can also be accessed via **dot notation**, as if the properties were _attributes_ of a class. This is often simpler to write and to read: remember to read the `.` as an `'s`!

```js
var favorites = { music: 'jazz', food: 'pizza', numbers: [12, 42]};

//access variable
console.log( favorites.music ); //'jazz'

//assign variable
favorites.food = 'cake';
console.log( favorites.food ); //'cake'

//access undefined key
console.log( favorites.language ); //undefined
favorites.language = 'javascript'; //assign new key and value

//access nested values
console.log( favorites.numbers[0] ); //12
```

- The one advantage to using _bracket notation_ is that you can specify property names as variables or the results of an expression. Thus the recommendation is to use _dot notation_ unless the property you wish to access is dynamically determined.

It is possible to get _arrays_ of the object's keys calling the `Object.keys()` method and passing in the object you wish to get the keys of. Note that an equivalent function for values is not supported by most browsers.

```js
var ages = {sarah:42, amit:35, zhang:13};
var keys = Object.keys(ages); // [ 'sarah', 'amit', 'zhang' ]
```

## Control Structures
<!-- //if
  //blocks
  //logical operators
//while, for
  //DO NOT USE `for ... in` ! -->

## Functions
<!-- //basic syntax
//parameters are optional! -->

### Functional Programming
<!-- //anonymous callbacks are HUGE in JS!

//examples: `forEach`, `map`, etc --> -->
