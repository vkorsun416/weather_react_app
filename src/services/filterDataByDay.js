export default function (weatherList) {
        return weatherList.reduce((list, item) => {

            const forecastDate = item?.dt_txt.substr(0,10);
            list[forecastDate] = list[forecastDate] || [];
            list[forecastDate].push(item);

            return list;
        }, {});

}
