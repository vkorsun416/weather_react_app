import React, {useState} from 'react';
import getDayOfWeek from "../../services/getDayOfWeek";
import getCelsiusTemperature from "../../services/getCelsiusTemperature";
import minMaxTemp from "../../services/minMaxTemp";
import getWeatherIcon from "../../services/getWeatherIcon";
import moment from "moment";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "./Card.scss"

function Card(props) {
    const {data} = props;

    console.log(data[0].weather[0].icon)

    const [isOpen, setOpen] = useState(false);

    return (
        <div key={data[0].dt}>
            <div
                className={"detailWrap"}
                onClick={() => setOpen(!isOpen)}
                title={"Show more"}
            >
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
                    // Get average weather data of day
                    src={getWeatherIcon(data[Math.floor(+(data.length) / 2)].weather[0].icon)}
                    alt={data[Math.floor(+(data.length) / 2)].weather[0].icon}
                />
                <p>
                    {data[Math.floor(+(data.length) / 2)].weather[0].description}
                </p>
            </div>
            <div className={"openDetails" + (isOpen ? "" : " hide")}>
                <p className={"date"}>
                    {moment(data[0].dt_txt).format('LL')}
                </p>
                <div className={"averages"}>
                    <div className={"item"}>
                        <p>
                            Pressure
                        </p>
                        <strong>
                            {minMaxTemp(data).pressure} mb
                        </strong>
                    </div>
                    <div className={"item"}>
                        <p>
                            Wind
                        </p>
                        <strong>
                            {minMaxTemp(data).wind} mph
                        </strong>
                    </div>
                    <div className={"item"}>
                        <p>
                            Humidity
                        </p>
                        <strong>
                            {minMaxTemp(data).humidity}%
                        </strong>
                    </div>
                </div>
                <Swiper
                    slidesPerView={4.5}
                >
                    {data.map(item => (
                        <SwiperSlide key={item.dt}>
                            <p>
                                {/*Get time from forecast*/}
                                {item.dt_txt.match(/[0-9]{2}:[0]{2}/)}
                            </p>
                            <img className={"imageDetail"}
                                 src={getWeatherIcon(item.weather[0].icon)}
                                 alt={item.weather[0].main}
                            />
                            <strong>
                                {getCelsiusTemperature(item.main.temp)}
                            </strong>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Card;