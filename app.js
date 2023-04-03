let userPoints = 0;

let user = prompt("Hi, This is Fi! What's your name?");
alert(
  "Welcome to my website, " +
    user +
    ". please answer the questions with yes/no or y/n."
);

let answer1 = prompt("Did you read my bio?");
if (answer1 === "yes") {
  console.log("Let's quiz you then!");
  alert("Let's quiz you then!");
} else {
  alert("You'll have to guess then!");
}

let answer2 = prompt("Did I study cinema?");
if (answer2.toLowerCase() === "yes" || answer2.toLowerCase() === "y") {
  console.log("No, that is not correct. I studied architecture!");
  alert("No, that is not correct. I studied architecture!");
} else {
  userPoints++;
  console.log("You are right. I have architecture degree.");
  alert("You are right. I have architecture degree.");
}

let answer3 = prompt("Have I lived in Liverpool?");
if (answer3.toLowerCase() === "yes" || answer3.toLowerCase() === "y") {
  userPoints++;
  console.log("Yes! That is correct!");
  alert("Yes! That is correct!");
} else {
  console.log("That is wrong. I live in Liverpool.");
  alert("That is wrong. I live in Liverpool.");
}

let answer4 = prompt("My favourite sport is football, is it correct?");
if (answer4.toLowerCase() === "yes" || answer4.toLowerCase() === "y") {
  console.log("No, my favourite sport is tennis!");
  alert("No, my favourite sport is tennis!");
} else {
  userPoints++;
  console.log("Well done. My favourite sport is tennis.");
  alert("Well done. My favourite sport is tennis.");
}

let answer5 = prompt("Am I right-handed?");
if (answer5.toLowerCase() === "yes" || answer5.toLowerCase() === "y") {
  userPoints++;
  console.log("Yes, I am right-handed!");
  alert("Yes, I am right-handed!");
} else {
  console.log("No points this time. I am right-handed");
  alert("No points this time. I am right-handed.");
}

function q7() {
  const number = 7;
  let guess = prompt(
    "What is my lucky number between 1-10? You have 3 attempts to guess right!"
  );

  for (let i = 3; i >= 0; i--) {
    if (i === 0) {
      alert("Unlucky. It is 6.");
      break;
    }
    if (guess < number) {
      alert("Too low, guess again!");
      guess = prompt(
        `Wrong. You now have  ${i} more attempts to get it right!`
      );
    } else if (guess > number) {
      alert("Too high, guess again!");
      guess = prompt(
        `Wrong. You now have  ${i} more attempts to get it right!`
      );
    } else if (guess === number) {
      userPoints++;
      alert("Congratulations, you have" + userPoints + "points!");
      break;
    }
  }
}
