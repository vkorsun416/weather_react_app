import React, {useContext, useEffect} from "react";
import context from "./context/context";

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

        console.log("Latitude is:", lat)
        console.log("Longitude is:", long)
        console.log(process.env.WEATHER_API_URL)
    }, [lat, long]);

    return (
        <>

        </>
    );
}

export default App;
