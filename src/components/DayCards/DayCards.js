import React, {useContext} from 'react';
import context from "../../context/context";
import filterDataByDay from "../../services/filterDataByDay";
import Card from "./Card";
import "./Card.scss"

function DayCards() {

    const {
        weatherData,
    } = useContext(context);

    const dailyForecasts = Object.values(filterDataByDay(weatherData.list));
    const fiveDaysForecast = dailyForecasts.length >= 5 ? dailyForecasts.slice(0, 5) : dailyForecasts;

    return (
        <>
            {fiveDaysForecast.map((item, index) => (
                <Card data={item} key={index}/>
            ))}
        </>
    );
}

export default DayCards;