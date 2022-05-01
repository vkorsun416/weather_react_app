export default function (weatherData) {
    const url = 'http://openweathermap.org/img/wn/'

    return `${url}${weatherData}@2x.png`
}