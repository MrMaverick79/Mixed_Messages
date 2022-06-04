# Welcome to the readme file for Mixed Messages

## A CodeAcademy Project

### Brendan Tuckerman 2022

---

## Planning phase:

From Codeacademy:
:file_folder:
>For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like >an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you >know of JavaScript syntax so far to build the program and customize it to your liking.

This is a Javascript project, but could be extended to include html/css (a button that generates a new quote; background and font like those from 'brainyquote' etc.)

This project also implement Git & Github as version control.

This project was also a chance to practice with markdown, which is totally :fire:

---

**Topic**

This program will return random inspirational (or not) quotes:

	## "Never forget that you will always be something you're not.'
	
Where the string is formed of three different randomly selcted sections:

1. Introductory phrase ending in subordinator ("Never forget that..")
2. Middle phrase containing the subject ("...you will always..."). Subject has to be in third person for agreement purposes.
3. Ending phrase ("...something you're not.")

---

**Steps & TODO**

~~Set up an object with 3 nested  sample arrays with messsages- introduction, middle, end.~~
~~Create random function that selects a number from 0 to length of array.~~
~~Return a string that is a introduction + middle + end.~~

---

**Sample phrases**

Introduction:  ["A strong soul is one which ", "Don't give up unless ", "You are bound to succeed unless "]
Middle: ["your mother", "someone else", "the dog next door"]
End: ["forget.' , "gives in first.", "sleeps in so long that they miss the bus to work."]

---

**Future directions**

- HTML and CSS to make it an interactive page
- Change code to identify middle as singular or plural. Possibly first choose from two arrays 'singular' and 'plural', then change a IsPlural value to true.


