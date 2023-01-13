
let inputValue = + prompt("Введите число: ");

if (isNaN(inputValue)) {
   alert("Упс, кажется, вы ошиблись")
} else if (typeof (inputValue) == 'number') {
   console.log(inputValue % 2 === 0 ? "Число четное" : "Число нечетное");
} else {
   alert("Упс, кажется, вы ошиблись")
}

