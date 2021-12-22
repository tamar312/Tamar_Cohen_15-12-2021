import produce from 'immer'
import { actions } from '../action';
// import { string } from 'yup/lib/locale';
import createReducer from "./reducerUtils";

const initialState = {

    cityArr: [],
    weatherArr: [],
    favorites: [],
    temperture: "13",
    currentCity: "",
    weatherText: "",
    key: "",
    flagTmp: false,
    flagColor: false,
    isFavorite: false,
}
const weather = {
    getCityArr(state, action) {
        debugger
        state.cityArr = action.payload
    },
    setWeather(state, action) {
        debugger
        state.getWeather = action.payload
    },
    setCurrentCity(state = initialState, action) {

        state.currentCity = action.payload;
    },
    setKey(state = initialState, action) {

        state.key = action.payload;
    },
    setWeatherText(state = initialState, action) {

        state.weatherText = action.payload;
    },
    addToFavorites(state = initialState, action) {
        debugger
        const newFavorites = [...state.favorites, action.payload];
        state.favorites = newFavorites;
        // state.isFavorite = true;
        alert("Added successfully!")

    },
    deleteFromFavorites(state = initialState.favorites, action) {
        let arr = action.payload[1]
        arr = arr.filter((item) => item.id !== action.payload[1][action.payload[0]].id).map(({ id, name, weatherText }) => ({ id, name, weatherText }));
        state.favorites = arr;
    },
    setFlagTmp(state, action) {
        state.flagTmp = action.payload;
    },
    setWeatherArr(state, action) {
        state.weatherArr = action.payload
    },
    setTemp(state = initialState, action) {
        debugger
        state.temperture = action.payload;
    },
    setFlagColor(state, action) {
        debugger
        state.flagColor = actions.payload;
    }
}
export default produce((state, action) => createReducer(state, action, weather), initialState);
// qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8