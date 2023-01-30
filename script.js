const jokes = [
  "Why did the programmer quit his job? He didn't get arrays.",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.",
  "Why was the computer cold? Because it left its Windows open.",
  "Why do developers always mix up their partners' birthday? Because they never remember their own.",
  "Why do programmers prefer dark mode? Light attracts bugs.",
];

///This code defines an array of jokes, a function to get a random joke from the array, and an event listener to display the joke in a HTML element with the ID joke-display when the user clicks a button with the ID joke-button.

function getJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

const jokeButton = document.getElementById("joke-button");
const jokeDisplay = document.getElementById("joke-display");

jokeButton.addEventListener("click", function () {
  jokeDisplay.innerHTML = getJoke();
});
