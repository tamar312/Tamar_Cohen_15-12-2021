import { React, useEffect, useState } from 'react';
import { ModalBody } from 'react-bootstrap';
import axios from 'axios';
import { actions } from '../redux/action'
import './weather.css';
import Select from 'react-select';
// import { FcCheckmark } from "react-icons/fc";
import { useSelector, useDispatch, connect } from 'react-redux';
function Weather(props) {
    const flagColor = useSelector((state) => state.WeatherReducer.flagColor);
    const isFavorite = useSelector((state) => state.WeatherReducer.isFavorite);
    const cityArr = useSelector((state) => state.WeatherReducer.cityArr);
    // const temperture = useSelector((state) => state.WeatherReducer.temperture);
    const weatherArr = useSelector((state) => state.WeatherReducer.weatherArr);
    console.log("weathertu", weatherArr)
    const flag = useSelector((state) => state.WeatherReducer.flagTmp);
    // const favorites = useSelector((state) => state.WeatherReducer.favorites);
    console.log("weatherarr", cityArr)
    const dispatch = useDispatch();
    const currentCity = useSelector((state) => state.WeatherReducer.currentCity);
    const weatherText = useSelector((state) => state.WeatherReducer.weatherText);
    const key = useSelector((state) => state.WeatherReducer.key);
    const temperature = useSelector((state) => state.WeatherReducer.temperture);
    console.log("temper", temperature)
    const date = useSelector((state) => state.WeatherReducer.date);
    const [degree, setDegree] = useState("c");
    const [city, setCity] = useState();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu"];

    let favorite = { "id": key, "name": currentCity, "weatherText": weatherText }
    const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8&q="

    const searchCity = async (event) => {
        debugger
        //Request to api autocomplete cities
        const res = await axios.get(`${baseURL}${event.target.value}&language=en-us`)
        console.log("resssss", res)
        debugger
        //set the regiins
        dispatch(actions.getCityArr(res.data))
        setCity(res.data);
        debugger
        if (res.data.length == 1) {
            debugger
            chooseCity(res.data)
        }
    }
    const chooseCity = async (city) => {
        debugger
        dispatch(actions.setCurrentCity(city[0].LocalizedName));
        // key f
        const key = city[0].Key;
        console.log("key", key)
        dispatch(actions.setKey(key));
        const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8`)

        // const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8&language=en-us`)
        console.log("resssss2", res)
        debugger
        // dispatch(actions.setWeather(res.WeatherText))
        // discription
        dispatch(actions.setWeatherText(res.data[0].WeatherText))
        let y = res.data[0].Temperature.Metric.Value;
        y = Math.round(y);
        //set the temp
        dispatch(actions.setTemp(y));
        // const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8`)
        const res2 = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8&details=true&metric=true`);
        debugger
        dispatch(actions.setWeatherArr(res2.data.DailyForecasts))
    }
    // else {
    //     const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${favorite.id}?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8&language=en-us`)
    // }
    const convert = () => {
        debugger
        if (degree == 'c') {
            debugger
            dispatch(actions.setTemp(Math.round(temperature * 9 / 5) + 32));
            setDegree("f")
            for (var i in weatherArr) {
                Math.round((weatherArr[i].Temperature.Maximum.Value * 9 / 5) + 32)
                Math.round((weatherArr[i].Temperature.Minimum.Value * 9 / 5) + 32)
            }
        }
        else {
            dispatch(actions.setTemp(Math.round((temperature - 32) * 5 / 9)));
            setDegree("c")
            for (var i in weatherArr) {
                Math.round((weatherArr[i].Temperature.Maximum.Value - 32) * 5 / 9)
                Math.round((weatherArr[i].Temperature.Minimum.Value - 32) * 5 / 9)
            }
        }
    }
    const onLoud = async () => {
        debugger
        dispatch(actions.setCurrentCity("Tel Aviv"));
        const key = 215854;
        dispatch(actions.setKey(key));
        const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8`)
        console.log("resssss2", res)
        debugger
        dispatch(actions.setWeatherText(res.data[0].WeatherText))
        dispatch(actions.setTemp(res.data[0].Temperature.Metric.Value));
        debugger
        const res2 = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8&details=true&metric=true`);
        debugger
        dispatch(actions.setWeatherArr(res2.data.DailyForecasts))
    }

    useEffect(() => {
        debugger
        if (!currentCity) {
            debugger
            onLoud();
        }
    }, [])

    useEffect(() => {
        debugger
        if (flag) {
            debugger
            const res2 = axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8&details=true&metric=true`);
            dispatch(actions.setWeatherArr(res2.data.DailyForecasts))
            dispatch(actions.setFlagTmp(false));
        }
    }, [flag])
    return (
        <>
            {/* qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8 */}

            <div className={flagColor ? 'dark' : 'light'} style={{ width: '100%', height: '100%' }}>
                <div className="container">
                    <div className=" row d-flex justify-content-center">
                        <input type="text" list="city" className="search"
                            options={cityArr}
                            onChange={searchCity}
                            placeholder="Search For Arae:"
                        ></input>
                        <datalist id="city">
                            {cityArr ? cityArr.map(x => {
                                return (
                                    <option>{x.LocalizedName}</option>)
                            }) : ''}
                        </datalist>
                        <button style={{ height: 'fit-content', marginTop: '2vh', background: 'lightblue' }}
                            onClick={() => chooseCity(city)}>Show</button>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <br></br>

                        <button class="btn btn-primary bshadow fontButtonds" style={{ backgroundColor: 'black', width: '30vmin' }}
                            onClick={() => dispatch(actions.addToFavorites(favorite))}
                        >
                            Add to favorites</button>

                        <br></br>
                    </div >
                    <div className='d-flex justify-content-start'>
                        <div style={{ fontSize: 'medium' }}>{currentCity} </div>
                        <p style={{ fontSize: 'larger', marginTop: '1vh' }}>{temperature}{degree}</p>
                    </div>
                    <p className="d-flex justify-content-center" style={{ fontSize: 'large' }}>{weatherText}</p>
                    <button onClick={() => convert()}>Convert Temperature</button>
                    {/* <p>{temperture}</p> */}
                    <div className='row'>
                        {weatherArr ? weatherArr.map((x, i) => {
                            return (
                                <div className='col-md-2 stl' style={{ background: '#7adced' }}>
                                    <div style={{ marginTop: '3vh', fontSize: 'large', fontWeight: '500' }}
                                        className='d-flex justify-content-center'>{days[i]}</div>
                                    <div style={{ marginTop: '1vh', fontSize: 'large', fontWeight: '500' }}
                                        className='d-flex justify-content-center'>{x.date}</div>
                                    <div className='d-flex justify-content-center'
                                        style={{
                                            fontSize: "large", marginTop: '3vh', fontSize: 'large', fontWeight: '500'
                                        }}>{x.Temperature.Maximum.Value}{degree}-{x.Temperature.Minimum.Value}{degree}</div>
                                </div>
                            )
                        }) : ''}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Weather;

