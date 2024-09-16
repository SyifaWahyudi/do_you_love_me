const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");

// Show message if "Yes" is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yesss, I love you too! ❤️";
    noBtn.style.display = "none"; // Hide "No" button
    yesBtn.style.display = "none"; // Hide "Yes" button
});

// Handle "No" button logic with looping
noBtn.addEventListener("click", () => {
    question.innerHTML = "Are you sure? Do you really not love me?";
    noBtn.innerHTML = "Yes, I love you!";
    noBtn.addEventListener("click", () => {
        question.innerHTML = "Yesss, I love you too! ❤️";
        noBtn.style.display = "none"; // Hide "No" button
        yesBtn.style.display = "none"; // Hide "Yes" button
    });
});
