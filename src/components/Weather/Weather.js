import React, {useContext} from 'react';
import context from "../../context/context";
import "./Weather.scss";
import moment from "moment";
import getCelsiusTemperature from "../../services/getCelsiusTemperature";
import getWeatherIcon from "../../services/getWeatherIcon";
import CardDetails from "../CardDetails/CardDetails";

function Weather() {
    const {
        weatherData,
    } = useContext(context);

    return (
        <div className={"colorWrap"}>
            <div className={"wrap"}>
                <h3 className={"location"}>
                    {weatherData?.city?.name}
                    , {weatherData?.city?.country}
                </h3>
                <p className={"weekDay"}>
                    {moment().format('dddd')}
                </p>
                <p className={"day"}>
                    {moment().format('LL')}
                </p>
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

                <CardDetails/>

            </div>
        </div>
    );
}

export default Weather;