const quotes = [
  "Believe in yourself.",
  "You can do it!",
  "Never give up.",
  "Every day is a second chance.",
  "The best way out is always through."
];

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

module.exports = { getRandomQuote };