import React, {useState} from 'react';
import Context from './context'

function ApiContext(props) {

    const {children} = props;

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    function getUserLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    }

    return (
        <Context.Provider value={{
            lat,
            long,
            getUserLocation,
        }}>
            {children}
        </Context.Provider>
    );
}

export default ApiContext;