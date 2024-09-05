function getAverage(scores) {
  let numberOfScores = scores.length;  // Corrected "lenght" to "length"
  let sum = 0;  // Initialize sum outside the loop
  let i = numberOfScores - 1;

  while (i >= 0) {
    sum = sum + scores[i];
    i = i - 1;
  }

  let avg = sum / numberOfScores;
  return avg;  // Return the calculated average
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
