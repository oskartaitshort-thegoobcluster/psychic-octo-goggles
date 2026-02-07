const video = document.getElementById("reaction");
const reactionText = document.getElementById("reactionText");

// 🔒 SECRET trigger words (not shown anywhere)
let triggerWords = [
  "bright pink pudding",
  "detal mick",
  "pork",
  "sigga nex",
  "sigger nex"
];

function send() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  if (containsTrigger(text)) {
    react();
  } else {
    reactionText.textContent = "";
  }

  input.value = "";
}

function containsTrigger(text) {
  return triggerWords.some(word =>
    text.toLowerCase().includes(word.toLowerCase())
  );
}

function react() {
  reactionText.textContent = "";
  video.style.display = "block";
  video.currentTime = 0;
  video.play();
}
