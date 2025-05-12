import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const WeatherDiv = styled.div`
    width : 800px;
    margin : 0 auto;
    flex-direction : column;
    text-align : center;
`
const Title = styled.p`
    font-size : 2rem;
`

const WeatherIcon = styled.img`
    width: 100px;
    height: 100px;
`

function WeatherPage() {

    const getOrNot = useRef(false);

    const [ weather, setWeather ] = useState(null);
    const lat = useRef('');
    const lon = useRef('');

    const getWeather = async () => {
        const token = localStorage.getItem("JWTtoken");

        await axios.post(`http://localhost:8080/weather/`,
            {
                latitude : lat.current,
                longitude : lon.current,
            },
            {
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }, withCredentials : true 
            },
        )
        .then(response => {
            setWeather(response.data);
            // console.log(response.data);
        })
        .catch((error) => console.log(error));

    }

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat.current = position.coords.latitude;
                lon.current = position.coords.longitude;
                // console.log(`위도 : ${lat.current}, 경도 : ${lon.current}`);
                getWeather();
            },
            (error) => {
                console.log(error);
            }
        )
    }


    useEffect(() => {
        if(getOrNot.current) return;
        else getOrNot.current = true;
        getPosition();
    }, [])

    if(weather)
    return (
        <WeatherDiv>
            <h2>📍 {weather.name}, {weather.sys.country}</h2>
            <WeatherIcon src={`https://openweathermap.org/img/wn/01d@2x.png`} alt="날씨 아이콘" />
            <Title>🌡️ {Math.round(weather.main.temp)}°C</Title>
            <p>🤒 체감: {Math.round(weather.main.feels_like)}°C</p>
            <p>💧 습도: {weather.main.humidity}%</p>
            <p>💨 풍속: {weather.wind.speed}m/s</p>
        </WeatherDiv>   
    )
}

export default WeatherPage