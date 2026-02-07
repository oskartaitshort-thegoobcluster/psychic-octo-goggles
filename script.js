const chat = document.getElementById("chat");
const video = document.getElementById("reaction");
const wordList = document.getElementById("wordList");

let triggerWords = [
  "bright pink pudding",
  "dental mick",
  "pork",
  "sigga nex",
  "sigger nex",
];

// Show initial trigger words
triggerWords.forEach(word => createWordDiv(word));

function send() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  const msg = document.createElement("div");
  msg.className = "msg";
  msg.textContent = "User: " + text;
  chat.prepend(msg);

  if (containsTrigger(text)) {
    const warn = document.createElement("div");
    warn.className = "msg";
    warn.textContent = "";
    chat.prepend(warn);
    playReaction();
  }

  input.value = "";
}

function containsTrigger(text) {
  return triggerWords.some(word =>
    text.toLowerCase().includes(word.toLowerCase())
  );
}

function playReaction() {
  video.style.display = "block";
  video.currentTime = 0;
  video.play();
}

function addWord() {
  const input = document.getElementById("newWord");
  const word = input.value.trim();
  if (!word) return;

  triggerWords.push(word);
  createWordDiv(word);
  input.value = "";
}

function createWordDiv(word) {
  const div = document.createElement("div");
  div.className = "msg";
  div.textContent = "Trigger: " + word;
  wordList.appendChild(div);
}
