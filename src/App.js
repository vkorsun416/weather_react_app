import React, {useContext, useEffect} from "react";
import context from "./context/context";
import Weather from "./components/Weather/Weather";

function App() {

    const {
        lat,
        long,
        weatherData,
        getUserLocation,
        getWeatherData,
    } = useContext(context);

    useEffect(() => {

        getUserLocation();
        getWeatherData();

    }, [lat, long]);

    return (
        <>
            {(weatherData.message === 0) ? (<Weather/>) : (<></>)}
        </>
    )
}

export default App;
