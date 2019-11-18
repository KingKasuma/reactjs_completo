import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city="Buenos Aires, ar"></WeatherLocation>
        <WeatherLocation city="Bogota, col"></WeatherLocation>
        <WeatherLocation city="Mexico, mex"></WeatherLocation>
    </div>
)

export default LocationList;