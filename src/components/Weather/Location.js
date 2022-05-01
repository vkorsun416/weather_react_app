import React, {useContext} from 'react';
import moment from "moment";
import context from "../../context/context";

function Location() {
    const {
        weatherData,
    } = useContext(context);

    return (
        <>
            <h3 className={"location"}>
                {weatherData?.city?.name}
                , {weatherData?.city?.country}
            </h3>
            <p className={"weekDay"}>
                {moment().format('dddd')}
            </p>
            <p className={"day"}>
                {moment().format('LL')}
            </p>
        </>
    );
}

export default Location;