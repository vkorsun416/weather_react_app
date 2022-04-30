export default function (weatherData) {
    const temperature = Math.round(+(weatherData.list[0].main.temp) - 273.15);

    return `${temperature}°С`;
}