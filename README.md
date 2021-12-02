# JavaScript Function Parameters Lab

## Learning Goals

- Define a function that uses a parameter
- Define a function that uses two parameters
- Define a function with a parameter that has a default value

## Introduction

In this lab, we'll practice using parameters in our functions. We'll also learn
how to create a default value for a parameter.

If you haven't already, fork and clone this lab into your local environment.
Navigate into its directory in the terminal, then run `code .` to open the files
in Visual Studio Code. (If you are using a different text editor, the command
will be different.) Finally, run `npm install` to install the lab's
dependencies.

You will be writing your code in the `index.js` file and running the tests by
running `npm test` in the terminal.

## Define a Function That Uses a Parameter

**Instructions:** Define a function called `introduction` that defines a
parameter, `name`, and returns the phrase: "Hi, my name is ${name}."

## Define a Function That Uses Two Parameters

Setting up your function to use two parameters is straightforward: simply
include both parameters in the parentheses in the function declaration line,
separated by a comma:

```js
function logTwoValues(value1, value2) {
  console.log(`The two values are ${value1} and ${value2}.`);
}
```

As you might expect, if we instead wanted to log three values — or ten
values — we can just continue listing the parameters in the parentheses,
with commas between each.

**Instructions:** To pass the second test, you'll need to define a function
called `introductionWithLanguage` that defines two parameters, `name` and
`language`, and returns the phrase: "Hi, my name is [name] and I am learning to
program in [language]."

## Define a Function That Uses an Optional Parameter

In a previous lesson, we created a function that logs a personalized greeting:

```js
function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}
```

What if we wanted to make this function work _whether or not_ a first name is
passed in as an argument? We can do this by setting a _default value_ for the
`firstName` parameter:

```js
function sayHelloTo(firstName = "User") {
  console.log(`Hello, ${firstName}!`);
}
```

Note that we have used the assignment operator (`=`) here to assign a default
value. The way this works is, if the function is called _with_ an argument, the
argument's value will supersede the default value. If it's called _without_ an
argument, the function will use the default value, logging "Hello, User!"

**Instructions:** Copy the function you created for the second test and name it
`introductionWithLanguageOptional`. It should have two parameters, `name` and
`language`, and the second parameter should have a default value of
"JavaScript".

## Saving Your Work Remotely

Currently, the work you've done on this assignment is only on your local
machine. To preserve your solution on your GitHub fork, you will need to stage the
changes you've made, commit them, and push the commit up to GitHub. Use
the following commands to do this:

```console
$ git add .
$ git commit -m "Completed assignment"
$ git push
```

If you visit your fork on GitHub, you should now see that _you've_ made the most
recent commit, and your code will be present in the files.
