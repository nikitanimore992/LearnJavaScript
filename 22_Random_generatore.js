

/*  1.Generate a random number using the Math.random() function and store it in a variable.
    2.Take input from the user using the prompt() function and store it in a variable.
    3.Compare the user's guess with the generated number using if-else statements and inform
     the user accordingly.
    4.Repeat steps 2 and 3 until the user guesses the correct number.
    5.Keep track of the number of turns it took the user to guess the correct number and 
    calculate the score accordingly.
    6.Terminate the program and show the final score.*/

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess = prompt("Guess the number between 1 and 100 : ");
    let turns = 0;

    while (userGuess != randomNumber) {
    if (userGuess < randomNumber) {
        userGuess = prompt("Your guess was too low. Try again.");
    } else {
        userGuess = prompt("Your guess was too high. Try again.");
    }
    turns++;
    }

    const score = 100 - turns;
    console.log(`Congratulations! You guessed the number in ${turns} turns! Your score is ${score}.`);
