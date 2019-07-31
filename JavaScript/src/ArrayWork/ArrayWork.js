var array = [4, 5, 1, 2, 3, 8, 6];
console.log(array);

array.sort(function (a, b) {
    return a - b
});
console.log(array);
console.log("Первые 5 - " + array.slice(0, 5));
console.log("Последние 5 - " + array.slice(array.length - 5));

function getSumOfEvenNumbers(array) {
    var array1 = array.filter(function (number) {
        return number % 2 === 0;
    });

    return array1.reduce(function (sum, currentNumber) {
        return sum + currentNumber;
    }, 0);
}

console.log("Сумма четных чисел = " + getSumOfEvenNumbers(array));

var longArray = [];
for (var i = 1; i <= 100; ++i) {
    longArray.push(i);
}
console.log(longArray);

function getEvenNumbersPow(longArray) {
    return longArray.filter(function (value) {
        return value % 2 === 0;
    }).map(function (value) {
        return Math.pow(value, 2);
    });
}

console.log("Квадраты четных чисел" + getEvenNumbersPow(longArray));


