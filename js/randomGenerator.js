function randomGenerator(seed, size, lowest, highest) {
  let random = new Math.seedrandom(seed);
  let numbers = [];
  for (let i = 0; i < size; i++) {
    let add = true;
    let randomNumber = Math.floor(random() * (highest - lowest)) + lowest;
    for (let y = 0; y < highest; y++) {
      if (numbers[y] == randomNumber) {
        add = false;
      }
    }
    if (add) {
      numbers.push(randomNumber);
    } else {
      i--;
    }
  }

  return numbers.sort((a, b) => a - b);
}
