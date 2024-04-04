const alphabets = {
  A: {
    activeDays: [2, 3, 4, 5, 8, 10, 15, 17, 23, 24, 25, 26],
    size: 28
  },
  B: {
    activeDays: [1, 2, 3, 4, 5, 8, 10, 12, 15, 17, 19, 23, 25],
    size: 28
  },
  C: {
    activeDays: [2, 3, 4, 8, 12, 15, 19],
    size: 21
  },
  D: {
    activeDays: [1, 2, 3, 4, 5, 8, 12, 15, 19, 23, 24, 25],
    size: 28
  },
  E: {
    activeDays: [1, 2, 3, 4, 5, 8, 10, 12, 15, 17, 19, 22, 26],
    size: 28
  },
  F: {
    activeDays: [1, 2, 3, 4, 5, 8, 10, 15, 17, 22],
    size: 28
  },
  G: {
    activeDays: [2, 3, 4, 8, 12, 15, 17, 19, 22, 24, 25, 26],
    size: 28
  },
  H: {
    activeDays: [1, 2, 3, 4, 5, 10, 17, 22, 23, 24, 25, 26],
    size: 28
  },
  I: {
    activeDays: [1, 5, 8, 9, 10, 11, 12, 15, 19],
    size: 21
  },
  J: {
    activeDays: [1, 4, 5, 8, 12, 15, 16, 17, 18, 19, 22],
    size: 28
  },
  K: {
    activeDays: [1, 2, 3, 4, 5, 10, 16, 18, 22, 26],
    size: 35
  },
  L: {
    activeDays: [1, 2, 3, 4, 5, 12, 19, 26],
    size: 28
  },
  M: {
    activeDays: [1, 2, 3, 4, 5, 9, 17, 23, 29, 30, 31, 32, 33],
    size: 35
  },
  N: {
    activeDays: [1, 2, 3, 4, 5, 9, 17, 22, 23, 24, 25, 26],
    size: 28
  },
  O: {
    activeDays: [2, 3, 4, 8, 12, 15, 19, 23, 24, 25],
    size: 28
  },
  P: {
    activeDays: [1, 2, 3, 4, 5, 8, 10, 15, 17, 23],
    size: 28
  },
  Q: {
    activeDays: [2, 3, 4, 8, 12, 15, 18, 19, 23, 24, 25, 26],
    size: 28
  },
  R: {
    activeDays: [1, 2, 3, 4, 5, 8, 10, 15, 17, 18, 23, 26],
    size: 28
  },
  S: {
    activeDays: [2, 5, 8, 10, 12, 15, 17, 19, 22, 25],
    size: 28
  },
  T: {
    activeDays: [1, 8, 9, 10, 11, 12, 15],
    size: 21
  },
  U: {
    activeDays: [1, 2, 3, 4, 12, 19, 22, 23, 24, 25],
    size: 28
  },
  V: {
    activeDays: [1, 2, 3, 11, 19, 25, 29, 30, 31],
    size: 35
  },
  W: {
    activeDays: [1, 2, 3, 4, 12, 17, 18, 26, 29, 30, 31, 32],
    size: 35
  },
  X: {
    activeDays: [1, 4, 9, 11, 17, 23, 25, 29, 33],
    size: 35
  },
  Y: {
    activeDays: [1, 9, 17, 18, 19, 23, 29],
    size: 35
  },
  Z: {
    activeDays: [1, 5, 8, 11, 12, 15, 17, 19, 22, 23, 26, 29, 33],
    size: 35
  },
  " ": {
    activeDays: [],
    size: 7
  },
  "!": {
    activeDays: [1, 2, 3, 5],
    size: 7
  },
  ".": {
    activeDays: [5],
    size: 7
  },
  ":": {
    activeDays: [2, 4],
    size: 7
  },
  ";": {
    activeDays: [2, 4, 5],
    size: 7
  },
  ",": {
    activeDays: [4, 5],
    size: 7
  },
  "'": {
    activeDays: [1, 2],
    size: 7
  },
  "?": {
    activeDays: [1, 8, 10, 12, 16],
    size: 21
  },
  "1": {
    activeDays: [2, 8, 9, 10, 11, 12],
    size: 14
  },
  "2": {
    activeDays: [1, 4, 5, 8, 10, 12, 16, 19],
    size: 21
  },
  "3": {
    activeDays: [1, 5, 8, 10, 12, 15, 17, 19, 23, 25],
    size: 28
  },
  "4": {
    activeDays: [3, 4, 9, 11, 15, 16, 17, 18, 19, 25],
    size: 28
  },
  "5": {
    activeDays: [1, 2, 3, 5, 8, 10, 12, 15, 17, 19, 22, 25],
    size: 28
  },
  "6": {
    activeDays: [2, 3, 4, 8, 10, 12, 15, 17, 19, 25],
    size: 28
  },
  "7": {
    activeDays: [1, 8, 11, 12, 15, 17, 22, 23],
    size: 28
  },
  "8": {
    activeDays: [2, 4, 8, 10, 12, 15, 17, 19, 23, 25],
    size: 28
  },
  "9": {
    activeDays: [2, 8, 10, 12, 15, 17, 19, 23,24,25],
    size: 28
  },
  "0": {
    activeDays: [2, 3, 4, 8, 12, 15, 19, 23,24, 25],
    size: 28
  }

};

export default alphabets;
