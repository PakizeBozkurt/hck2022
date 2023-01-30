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

const images = [
  "https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1bm55JTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1641378588520-f30c0c36ef84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVubnklMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVubnklMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnklMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
];
