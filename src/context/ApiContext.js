import React, {useState} from 'react';
import Context from './context'

function ApiContext(props) {

    const {children} = props;

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [weatherData, setWeatherData] = useState([]);

    function getUserLocation() {

        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        }, () => {
            // Riga, Latvia
            setLat(57);
            setLong(25);
        });
    }

    async function getWeatherData() {
        await fetch(`${process.env.REACT_APP_WEATHER_API_URL}/forecast/?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setWeatherData(result)
            });
    }

    return (
        <Context.Provider value={{
            lat,
            long,
            weatherData,
            getUserLocation,
            getWeatherData,
        }}>
            {children}
        </Context.Provider>
    );
}

export default ApiContext;