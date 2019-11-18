import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather'
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

//const WeatherLocation = () => (
//    <div className="weatherLocationCont">
//        <Location city={"Buenos Aires"}></Location>
//        <WeatherData data={data}></WeatherData>
//    </div>
//);

class WeatherLocation extends Component {
    //1.- Constructor
    //2.- Estado componente
    //3.- Primer render
    //4.- Evento OnClick
    //5.- setState
    //6.- Segundo render
    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city: city,
            data: null
        };
        console.log("constructor");
    }
    
    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");        
    }

    // componentWillMount() {
    //     console.log("UNSAFE componentWillMount");
    // }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("UNSAFE componentWillUpdate");
    // }
    
    handleUpdateClick = () => {   
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {            
            return resolve.json(); //resolve.json es una promesa
        }).then(data => {
            console.log("Resultado del hanndleUpdateClick");
            const newWeather = transformWeather(data);
            console.log(data);
            //debugger;
            this.setState({
                data: newWeather
            });
        });        
    }

    render(){
        console.log("render");
        const { city , data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data}></WeatherData> : 
                    <CircularProgress size={50}></CircularProgress>
                }                
            </div>
        );
    }    
};
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired
}
export default WeatherLocation;