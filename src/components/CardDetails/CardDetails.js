import React, {useContext} from 'react';
import context from "../../context/context";
import filterDataByDay from "../../services/filterDataByDay";
import Card from "./Card";
import "./Card.scss"

function CardDetails() {

    const {
        weatherData,
    } = useContext(context);

    const dailyForecasts = Object.values(filterDataByDay(weatherData.list));
    const fiveDaysForecast = dailyForecasts.length >= 5 ? dailyForecasts.slice(0, 5) : dailyForecasts;

    return (
        <div className={"cardWrap"}>
            {fiveDaysForecast.map((item, index) => (
                <Card data={item} key={index}/>
            ))}
        </div>
    );
}

export default CardDetails;