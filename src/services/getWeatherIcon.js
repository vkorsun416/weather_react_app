export default function (weatherData, index) {
    const url = 'http://openweathermap.org/img/wn/'

    return `${url}${weatherData.list[index].weather[0].icon}@2x.png`
}