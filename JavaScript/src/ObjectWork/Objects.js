var countries = [{
    name: "Russia",
    cities: [
        {cityName: "Moscow", population: "12 615 882"},
        {cityName: "StPetersburg", population: "5 383 968"},
        {cityName: "Novosibirsk", population: "1 612 833"},
        {cityName: "Tomsk", population: "574 002"}
    ]
}, {
    name: "Italy",
    cities: [
        {cityName: "Rome", population: "2 875 805"},
        {cityName: "Milan", population: "1 351 562"},
        {cityName: "Naples", population: "970 185"}
    ]
}, {
    name: "Germany",
    cities: [
        {cityName: "Berlin", population: "3 520 031"},
        {cityName: "Munich", population: "1 450 381"},
        {cityName: "Hamburg", population: "1 787 408"}
    ]
}];

function getMaxCityCountCountry() {
    var maxCityCount = countries.map(function (value) {
        return value.cities.length;
    }).sort(function (a, b) {
        return b - a;
    }).shift();

    return countries.filter(function (value) {
        return value.cities.length === maxCityCount
    }).map(function (value) {
        return value.name
    })
}
console.log(getMaxCityCountCountry());


