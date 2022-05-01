import React, {useContext} from 'react';
import context from "../../context/context";
import filterDataByDay from "../../services/filterDataByDay";
import Card from "./Card";

function CardDetails() {

    const {
        weatherData,
    } = useContext(context);

    const dailyForecasts = Object.values(filterDataByDay(weatherData.list));
    const fiveDaysForecast = dailyForecasts.length >= 5 ? dailyForecasts.slice(0, 5) : dailyForecasts;

    return (
        <>
            {fiveDaysForecast.map((item, i) => (
                <Card data={item} index={i}/>
            ))}
        </>
    );
}

export default CardDetails;