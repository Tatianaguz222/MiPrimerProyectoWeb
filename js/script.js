
const button = document.getElementById("motivationButton");
const message = document.getElementById("message");

const quotes = [
    "Your only limit is the one you set yourself. Keep going!",
    "Small steps every day lead to big results!",
    "Discipline beats motivation. Show up for yourself!",
    "Believe in your progress. You are getting stronger!"
];

button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    message.textContent = quotes[randomIndex];
});
