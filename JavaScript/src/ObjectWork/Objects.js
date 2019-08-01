var countries = [{
    name: "Russia",
    cities: [
        {cityName: "Moscow", population: 12615882},
        {cityName: "StPetersburg", population: 5383968},
        {cityName: "Novosibirsk", population: 1612833},
        {cityName: "Tomsk", population: 574002}
    ]
}, {
    name: "Italy",
    cities: [
        {cityName: "Rome", population: 2875805},
        {cityName: "Milan", population: 1351562},
        {cityName: "Naples", population: 970185}
    ]
}, {
    name: "Germany",
    cities: [
        {cityName: "Berlin", population: 3520031},
        {cityName: "Munich", population: 1450381},
        {cityName: "Hamburg", population: 1787408}
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

console.log("Страна(ы) с наибольшим количеством городов - " + getMaxCityCountCountry());

function getCountryInformation(countries) {
    var info = {};
    countries.forEach(function (country) {
        var name = country.name;
        info[name] = getCountryPopulation(country);
    });
    return info;
}

function getCountryPopulation(country) {
    return country.cities.map(function (value) {
        return value.population;
    }).reduce(function (sumPop, current) {
        return sumPop + current;
    })
}

console.log(getCountryInformation(countries));
