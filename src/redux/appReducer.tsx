const INITIAL_STATE = {
    themes:[{name: "OpenStreetMap", adress: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},
        {name: "BlackAndWhite", adress: "https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"},
        {name:"PureWhite", adress: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"},
        {name: "PureBlack", adress: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"},],
    currentTheme: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    startingCoordinates: {
        lat: 55.702868,
        lng: 37.530865,
        zoom: 10
    },
    points: [{
        lat: 55.702868,
        lng: 37.530865,
        title: "1st Marker",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        date: " Wed May 11 2022 23:15:01 GMT+0300",
    }, {
        lat: 55.502868,
        lng: 37.430865,
        title: "2nd Marker",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        date: "Thu May 12 2022 14:23:02 GMT+0300 (Москва, стандартное время)",
    }, {
        lat: 55.902868,
        lng: 37.630865,
        title: "3rd Marker",
        description: "You can also change the theme btw, on the bottom left",
        date: "Fri May 13 2022 02:21:32 GMT+0300 (Москва, стандартное время)",
    }],
    newPointCoordinates: {
        lat: 0,
        lng: 0,
    },
    newPointTexts: {
        title: "",
        description: "",
        date: "",
    },
}

const appReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case "SET_NEW_POINT_COORDINATES": {
            return {
                ...state,
                newPointCoordinates: action.newPointCoordinates
            }
            break;
        }
        case "SET_NEW_POINT_TEXTS": {
            return {
                ...state,
                newPointTexts: {
                    title: action.title,
                    description: action.description,
                    date:action.date,
                }
            }
            break;
        }
        case "ADD_NEW_POINT": {
            let newPoints: Array<object> = [...state.points];
            let newPoint = {...state.newPointCoordinates, ...state.newPointTexts}
            newPoints.push(newPoint)
            return {
                ...state,
                points: newPoints,
            }
            break;
        }
        case "DELETE_POINT": {
            let newPoints: Array<object> = [...state.points];
            newPoints.splice(action.index, 1);
            return {
                ...state,
                points: newPoints,
            }
            break;
        }
        case "SET_THEME": {
            return {
                ...state,
                currentTheme: action.theme
            }
            break;
        }
        default:
            return state;
    }
}

export default appReducer;
