let value = 5;

if (typeof (value) == 'number') {
    alert(value + " -" + " число")
} else if (typeof (value) == 'string') {
    alert(value + " -" + " строка")
} else if (typeof (value) == 'boolean') {
    alert(value + " -" + " логический тип")
} else {
    alert("Тип " + value + " не определен")
}