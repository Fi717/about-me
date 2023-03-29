let user = prompt("Hi, This is Fi! What's your name?");
alert("Welcome to my website " + user);

let answer1 = prompt("Did you read my bio? yes/no");
if (answer1 === "yes") {
  console.log("Let's quiz you then!");
  alert("Let's quiz you then!");
} else {
  alert("You'll have to guess then!");
}

let answer2 = prompt("What I study architecture or cinema?");
if (answer2.toLowerCase() === "architecture") {
  console.log("Correct! You are legend!");
  alert("Correct! You are legend!");
} else {
  console.log("That is not correct. I studied architecture degree.");
  alert("That is not correct. I studied architecture degree.");
}

let answer3 = prompt("Which city do I live now?");
if (answer3.toLowerCase() == "liverpool") {
  console.log("Yes! That is correct!");
  alert("Yes! That is correct!");
} else {
  console.log("That is wrong. I live in Liverpool.");
  alert("That is wrong. I live in Liverpool.");
}

let answer4 = prompt("Last question! What is my favourite sport?");
if (answer4.toLowerCase() == "tennis") {
  console.log("Correct. You are amazing!");
  alert("Correct. You are amazing!");
} else {
  console.log("Wrong. It's tennis.");
  alert("Wrong. It's tennis.");
}
