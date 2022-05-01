import React, {useContext} from 'react';
import getWeatherIcon from "../../services/getWeatherIcon";
import getCelsiusTemperature from "../../services/getCelsiusTemperature";
import context from "../../context/context";

function WeatherNow() {
    const {
        weatherData,
    } = useContext(context);

    return (
        <div className={"mainWeather"}>
            <img
                className={"image"}
                src={getWeatherIcon(weatherData.list[0].weather[0].icon)}
                alt={weatherData.list[0].weather[0].main}
            />
            <p className={"temperature"}>
                {getCelsiusTemperature(weatherData.list[0].main.temp)}C
            </p>
            <p className={"weatherName"}>
                {weatherData.list[0].weather[0].main}
            </p>
        </div>
    );
}

export default WeatherNow;