import React from 'react';
import "./Weather.scss";
import DayCards from "../DayCards/DayCards";
import Location from "./Location";
import WeatherNow from "./WeatherNow";

function Weather() {
    return (
        <div className={"colorWrap"}>
            <div className={"wrap"}>

                <Location/>

                <WeatherNow/>

                <DayCards/>
            </div>
        </div>
    );
}

export default Weather;