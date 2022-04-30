import React, {useContext} from 'react';
import context from "../../context/context";
import "./Weather.scss";
import moment from "moment";

function Weather() {
    const {
        weatherData,
    } = useContext(context);

    return (
        <div className={"wrap"}>
            <h3 className={"location"}>
                {weatherData?.city?.name}
                , {weatherData?.city?.country}
            </h3>
            <p className={"weekDay"}>{moment().format('dddd')}</p>
            <p className={"day"}>{moment().format('LL')}</p>
        </div>
    );
}

export default Weather;