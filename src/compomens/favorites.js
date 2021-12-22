import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { actions } from '../redux/action'
import './favorites.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useHistory } from "react-router-dom";
function Favorites() {

    let history = useHistory();
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.WeatherReducer.favorites);

    const toHomePage = async (item) => {
        debugger
        dispatch(actions.setCurrentCity(item.name));
        dispatch(actions.setWeatherText(item.weatherText));
        dispatch(actions.setKey(item.id));
        dispatch(actions.setFlagTmp(true));
        //back to honePage
        history.push("/weather");
    }

    return (
        <>
            {favorites != '' && favorites.map((item, index) => (
                <div class="col-sm-2" style={{ width: '15rem' }}  >
                    <div class="card bshadow aa" style={{ marginLeft: '10vh' }}>
                        <div class="card-body">
                            <h5 style={{ marginTop: '2vh', fontSize: 'large', cursor: 'pointer' }} className="d-flex justify-content-center" onClick={() => toHomePage(item)}>{item.name}</h5>
                            <p className="d-flex justify-content-center" style={{ marginTop: '3vh', fontSize: 'initial' }}>{item.weatherText}</p>
                            <button style={{ marginTop: '3vh', background: 'black', color: 'white' }}
                                className="d-flex justify-content-center"
                                onClick={(e) => dispatch(actions.deleteFromFavorites([index, favorites]))}>‏
                                Remove From Favorites
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Favorites;