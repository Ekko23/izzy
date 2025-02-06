const messages = [
    "maybe think about it?",
    "are you positive??",
    "theres no way you are?",
    "think about it again!!",
    "linda LISTEN",
    "im gonna cryyyyyy",
    "jk i wont but pleasseee",
    "habibi ily",
    "lets talk about it!!",
    "Give me a chance <33"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}