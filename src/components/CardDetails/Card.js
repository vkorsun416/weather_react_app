import React from 'react';
import getDayOfWeek from "../../services/getDayOfWeek";
import getCelsiusTemperature from "../../services/getCelsiusTemperature";
import minMaxTemp from "../../services/minMaxTemp";
import getWeatherIcon from "../../services/getWeatherIcon";

function Card(props) {
    const {data, index} = props;

    console.log(data[2].weather[0])

    return (
        <div className={"detailWrap"} key={index}>
            <p>
                {getDayOfWeek(data).slice(0, 3).toUpperCase()}
            </p>
            <strong>
                {getCelsiusTemperature(minMaxTemp(data).max)}
            </strong>
            <p>
                {getCelsiusTemperature(minMaxTemp(data).min)}
            </p>

                <img
                    className={"imageDetail"}
                    src={getWeatherIcon(data[2].weather[0].icon)}
                    alt={data[2].weather[0].icon}
                />

            <p>
                {data[2].weather[0].description}
            </p>
        </div>

    );
}

export default Card;