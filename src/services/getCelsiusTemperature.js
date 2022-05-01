export default function (weatherData) {
    const temperature = Math.round(+(weatherData) - 273.15);

    return `${temperature}°`;
}