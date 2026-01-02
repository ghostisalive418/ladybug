// ===== Letter Lines =====
const letterLines = [
  "My Dearest Ladybug,",
  "",
  "Happy Birthday! 🎉💖",
  "I hope this day fills your heart with as much joy as you’ve given me over the past year.",
  "I wish you all the happiness, laughter, and love that you truly deserve.",
  "May your days be filled with light, your dreams turn into achievements, and your hard work pay off in ways bigger than you ever imagined.",
  "Best of luck for your board exams and every step of your life ahead — I know you will conquer everything with the brilliance and dedication that make you who you are.",
  "",
  "I still remember the day you sent me your picture — 11/06/2025.",
  "The happiness I felt was unlike anything I had ever known.",
  "I danced, smiled, and forgot the world around me, because in that single moment, all that mattered was you.",
  "That joy, that spark, still lives in my heart every time I think of you.",
  "",
  "You are crazy cute, endlessly sweet, and the kind of person who lights up everyone’s life without even trying.",
  "I see how hard you work, how much effort you pour into everything you care about.",
  "I know the late nights, the early mornings, the moments when you doubt yourself.",
  "But believe me, Ladybug — you are capable of everything.",
  "Every goal you set, every dream you chase, I know you will achieve it because you are strong, brilliant, and unstoppable.",
  "",
  "I want to be honest with you too.",
  "I am working on myself, growing, learning, trying to become better.",
  "But if I’m real… without you, it doesn’t feel like progress.",
  "It feels like walking forward with part of my heart missing, like healing in a place that still aches.",
  "",
  "I’m not broken — but I’m not whole either.",
  "",
  "Even though you chose to walk a different path, I am still here.",
  "Not to pull you back. Not to demand anything. Not to ask you to return.",
  "I am here quietly, faithfully, endlessly, loving you without expectation, caring without conditions, hoping for your happiness even if that happiness doesn’t include me.",
  "",
  "Ladybug, you mean more to me than I could ever explain.",
  "You didn’t just touch my heart — you changed the way I understand love.",
  "You are my inspiration, my quiet joy, my heartbeat in a world that often feels heavy.",
  "",
  "And if someday, somewhere, you ever wonder if you were important to someone…",
  "if you were deeply cherished…",
  "if you were truly loved…",
  "",
  "The answer will always be yes.",
  "",
  "Always.",
  "",
  "Yours, in every quiet way,",
  "Soham / Ghost 🤍"
];

// ===== Select elements =====
const letterEl = document.getElementById('line-letter');
const nextBtn = document.getElementById('nextBtn');
const heartsContainer = document.getElementById('hearts-container');

// ===== Line-by-line fade-in =====
let currentLine = 0;
function showNextLine() {
  if (currentLine < letterLines.length) {
    const p = document.createElement('p');
    p.textContent = letterLines[currentLine];
    letterEl.appendChild(p);
    setTimeout(() => { p.style.opacity = 1; }, 50);
    currentLine++;
    setTimeout(showNextLine, 800); // slower, more romantic
  } else {
    nextBtn.style.display = "block"; // show Next button at the end
  }
}
showNextLine();

// ===== Next button click =====
nextBtn.addEventListener('click', () => {
  window.location.href = 'index.html'; // go to the second page
});

// ===== Floating hearts =====
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.fontSize = `${Math.random() * 30 + 20}px`;
  heart.style.animationDuration = `${4 + Math.random() * 3}s`;
  heart.textContent = '💖';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 400);
