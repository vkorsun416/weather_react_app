import React, {useContext, useEffect} from "react";
import context from "./context/context";
import Weather from "./components/Weather/Weather";
import Loader from "./loader/Loader";

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
            {(weatherData.message === 0) ? (<Weather/>) : (<Loader></Loader>)}
        </>
    )
}

export default App;
