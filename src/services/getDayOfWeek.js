export default function (weatherData) {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return daysOfWeek[new Date(weatherData[0].dt * 1000).getDay()];
}