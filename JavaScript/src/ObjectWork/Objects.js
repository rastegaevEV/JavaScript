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

function getMaxCitiesCountCountry() {
    var maxCityCount = countries.map(function (value) {
        return value.cities.length
    }).sort(function (a, b) {
        return b - a
    }).shift();

    return countries.filter(function (value) {
        return value.cities.length === maxCityCount
    }).map(function (value) {
        return value.name
    })
}

console.log("Страна(ы) с наибольшим количеством городов - " + getMaxCitiesCountCountry());

function getCountryInformation(countries) {
    var info = {};
    countries.forEach(function (country) {
        info[country.name] = getCountryPopulation(country)
    });
    return info;
}

console.log(getCountryInformation(countries));

function getCountryPopulation(country) {
    return country.cities.reduce(function (sumPopulation, current) {
        return sumPopulation + current.population
    }, 0)
}


