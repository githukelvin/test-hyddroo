export const generateUniqueRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const generateUniqueRandomNumbers = (count, min, max) => {
  if (count > max - min + 1) {
    throw new Error(
      "Cannot generate more unique numbers than the range allows.",
    );
  }

  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < count) {
    uniqueNumbers.add(generateUniqueRandomNumber(min, max));
  }

  const numbersArray = Array.from(uniqueNumbers);

  // Ensure that exactly 6 numbers are generated
  while (numbersArray.length < 6) {
    numbersArray.push(generateUniqueRandomNumber(1, 9)); // Add extra random number between 1 and 9
  }

  return numbersArray.join("");
};
