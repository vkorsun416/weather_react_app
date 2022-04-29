import React, {useContext, useEffect} from "react";
import context from "./context/context";

function App() {

    const {lat, long, getUserLocation} = useContext(context);

    useEffect(() => {

        getUserLocation();

        console.log("Latitude is:", lat)
        console.log("Longitude is:", long)
    }, [lat, long]);

    return (
        <>

        </>
    );
}

export default App;
