# TypeScript version of Yatzy Refactoring Kata
Arranged by Victor Rentea https://victorrentea.ro

This exercise is meant to allow you to practice refactoring moves and master functional programming principles, the Array api, object-oriented design (optional) and breaking changes in baby-steps. 

## Practice Goal
- Refactor the code in **Yatzy.ts** until you're **proud**⭐️ of it.
- Estimated working time: **2-4 hours**.
- Ideally, solve it in **pair-programming** with a colleague/friend, taking 10-15 minutes turns each. 
- For best results, try to work on the exercise **in two sessions** in consecutive days.
- Hint: You will certainly need **multiple passes** through the code.
- Don't rush. Take **small, safe baby-steps**.
- To avoid breaking stuff, **use all the refactoring support** offered by your IDE: rename, extract method/variable, change method signature. 
- Keep the tests **green**✅.

Design Challenges: in the final solution 
- Names should be uniform
- Functions should have max 5 lines of code
- Use as much Array api you can: .find .filter .includes ...
- Do not change the contents of any array
- Don't use var or let => only const
- Code Smells reference guide: https://refactoring.guru/refactoring/smells


## Problem Description
The game of yahtzee is a simple dice game. Each round, each player rolls five six sided dice. The player may choose to reroll some or all of the dice up to three times (including the original roll). The player then places the roll at a category, such as ones, twos, sixes, pair, two pairs etc. If the roll is compatible with the score, the player gets a score for this roll according to the rules. If the roll is not compatible, the player gets a score of zero for this roll.

The kata consists of creating the rules to score a roll in any of a predefined category. Given a roll and a category, the final solution should output the score for this roll placed in this category.

The following categories exists:
1. Ones, Twos, Threes, Fours, Fives, Sixes: The player scores the sum of the dice that reads one, two, three, four, five or six, respectively. For example, 1, 1, 2, 4, 4 placed on “fours” gives 8 points.
2. Pair: The player scores the sum of the two highest matching dice. For example, 3, 3, 3, 4, 4 placed on “pair” gives 8.
3. Two pairs: If there are two pairs of dice with the same number, the player scores the sum of these dice. If not, the player scores 0. For example, 1, 1, 2, 3, 3 placed on “two pairs” gives 8.
4. Three of a kind: If there are three dice with the same number, the player scores the sum of these dice. Otherwise, the player scores 0. For example, 3, 3, 3, 4, 5 places on “three of a kind” gives 9.
5. Four of a kind: If there are four dice with the same number, the player scores the sum of these dice. Otherwise, the player scores 0. For example, 2, 2, 2, 2, 5 places on “four of a kind” gives 8.
6. Small straight: If the dice read 1,2,3,4,5, the player scores 15 (the sum of all the dice), otherwise 0.
7. Large straight: If the dice read 2,3,4,5,6, the player scores 20 (the sum of all the dice), otherwise 0.
8. Full house: If the dice are two of a kind and three of a kind, the player scores the sum of all the dice. For example, 1,1,2,2,2 placed on “full house” gives 8. 4,4,4,4,4 is not “full house”.
9. Yahtzee: If all dice have the same number, the player scores 50 points, otherwise 0.
10. Chance: The player gets the sum of all dice, no matter what they read.

## Installation

### With an IDE
Simply import the project in IntelliJ Ultimate, WebStorm, Visual Studio Code, or your preferred IDE. 
It should help you install it smoothly. 

### Manually
Make sure you have [node.js](https://nodejs.org), and [npm](https://www.npmjs.com/get-npm)
installed. Then in this directory:

Install mocha in node_modules:
```bash
npm install
```

To run unit tests:
```bash
npm test
```

To run unit tests in watch mode:
```bash
npm run watch
```

## Don't cheat
There are multiple clean solutions you can reach. 

One such solution is in YatziReference.ts, used for a Golden Master test (the last one) that exercises many random inputs comparing the output of your solution to that of this one.

PLEASE DON'T LOOK AT THIS SOLUTION!

The goal is to practice your refactoring skills not your COPY-PASTE ability (that's already proven at work). 

If running out of ideas, a live-refactoring of this exercise will be available at: 