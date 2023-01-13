
let min = 1;
let max = 100;
let random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  console.log(random);