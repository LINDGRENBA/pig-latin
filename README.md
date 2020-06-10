# Pig Latin

#### BDD Practice for Epicodus, 06.010.2020

#### By Brittany Lindgren and Jerrod Styrk

## Description

Use Behavior Driven Development to create a Pig Latin Translator. Impress all of your friends!

## Setup/Installation Requirements

* Clone this repository.
* To view the code itself, open in a text editor such as VS Code or Atom, etc.
* To view in your browser, double click on index.html.
* You do not need to run a server to view this document.
* No additional code is necessary to view this project.

## 

|Behavior         |Input Example      |Output|
|-----------------|-------------------|------|
|The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.     |Example Input: 3     |Example Input: 3 |
|The program adds "ay" to single-letter words beginning with a vowel.    |Example Input: i     |i-way|
|For words beginning with a consonant, move the first letter to the end and add -ay     | Example Input: dog      |  og-day |
|For words beginning with "y", treat "y" as a consonant     |Example Input: Year     | ear-yay   |
|For words with a consonant cluster at the beginning, move the consonant cluster to the end of the word and add -ay     |Input Example: chair     |   air-chay    |
|If the input is a single word, the program will capitalize the first letter of the word      |Example input: chair     |   Air-chay   |
|For multiple words the program will take each word and apply the appropriate specification     |Example input: I love code.     |   i-way ove-lay ode-cay.   |
|The program will capitalize the first letter of a sentence     |Example input: I love code.     |   I-way ove-lay ode-cay.  |

## Known Bugs

There are no known bugs at this time. 

## Support and contact details

Please feel free to contact me through GitHub (username: LINDGRENBA) with any questions, ideas or concerns.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

*This site is licensed under the MIT license.*

Copyright (c) 2020 **_Brittany A Lindgren && Jerrod Styrk_**