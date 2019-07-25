var array = [4, 5, 1, 2, 3, 8, 6];
console.log(array);

array.sort(function (a, b) {
    return a - b
});
console.log(array);
console.log("Первые 5 - " + array.slice(0, 5));
console.log("Последние 5 - " + array.slice(array.length - 5));

function filter(array, f) {
    var result = [];
    for (var i = 0; i < array.length; ++i) {
        var element = array[i];
        if (f(element)) {
            result.push(element);
        }
    }
    return result;
}

var array2 = filter(array, function (e) {
    return e % 2 === 0;
});

console.log("Сумма четных чисел массива = " + array2.reduce(function (sum, element) {
    return sum + element;
}, 0));

var longArray = [];
for (var j = 1; j < 101; ++j) {
    longArray.push(j);
}
console.log(longArray);

var longArrayFiltered = filter(longArray, function (e) {
    return e % 2 === 0
});
console.log(longArrayFiltered);

var numbers = [];
for (var n = 0; n < longArrayFiltered.length; ++n) {
    numbers.push(Math.pow(longArrayFiltered[n], 2));
}
console.log("Список квадратов четных чисел массива - " + numbers);

