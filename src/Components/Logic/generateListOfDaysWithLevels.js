import generateListOfDays from "./generateListOfDays";
import alphabets from "../Constants/alphabets";


const countNumberOfDaysFromAlphabet = (text) => {
  let count = 0;
  const textArray = text.split("");
  textArray.forEach((letter) => {
    count += (alphabets[letter] ? alphabets[letter].size : 0) + 7;
  });
  count += 7;
  return count;
}

export const generateListOfDaysWithLevels = (startDate, text) => {
  const numberOfDays = countNumberOfDaysFromAlphabet(text);
  const daysList = generateListOfDays(startDate, numberOfDays);
  const textArray = text.split("");

  let daysIndex = 7;
  textArray.forEach((letter) => {
    if (alphabets.hasOwnProperty(letter)) {
      for (let index = 0; index < alphabets[letter].size; index++) {
        if (alphabets[letter].activeDays.includes(index)) {
          daysList[daysIndex].level = 4;
        } else {
          daysList[daysIndex].level = 0;
        }
        daysIndex++;
      }
    }
    for (let index = 0; index < 7; index++) {
      daysList[daysIndex].level = 0;
      daysIndex++;
    }
  });
  return daysList;
}
