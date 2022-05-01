export default function (
    data,
    min = [], max = [],
    pressure = [],
    humidity = [],
    wind = []
) {
    data.map(item => {
        max.push(item.main.temp_max);
        min.push(item.main.temp_min);
        pressure.push(item.main.pressure);
        humidity.push(item.main.humidity);
        wind.push(item.wind.speed);
    });

    const minMax = {
        min: Math.round(Math.min(...min)),
        max: Math.round(Math.max(...max)),
    };

    const avgHumdity = Math.round(humidity.reduce((curr, next) => curr + next) / humidity.length);
    const avgPressure = Math.round(pressure.reduce((curr, next) => curr + next) / pressure.length);
    const avgWind = Math.round(wind.reduce((curr, next) => curr + next) / wind.length);

    return {
        min: minMax.min,
        max: minMax.max,
        humidity: avgHumdity,
        pressure: avgPressure,
        wind: avgWind
    }
}