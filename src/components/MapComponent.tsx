import React from "react";
import {TileLayer, MapContainer} from "react-leaflet";
import './Map.css';
import L from 'leaflet';
import {useDispatch, useSelector} from "react-redux";
import InfoPannel from "./InfoPannel";
import AddPanel from "./AddPanel";
import ThemeSelect from "./ThemeSelect";
import LocationMarker from "./LocationMarker";
import {setMarkerCoordinates, deleteMarker, setTheme, setMarkerText, addMarker} from "../redux/actions";
import Markers from "./Markers";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

const MapComponent = () => {
    const points = useSelector((state: any) => state.app.points);
    const center = useSelector((state: any) => state.app.startingCoordinates);
    const themes = useSelector((state: any) => state.app.themes);
    const newPointCoordinates = useSelector((state: any) => state.app.newPointCoordinates);
    const currentTheme = useSelector((state: any) => state.app.currentTheme);
    const now = new Date();

    let dispatch = useDispatch();
    const setCurrentTheme = (theme: any) => {
        dispatch(setTheme(theme));
    }

    const deletePoint = (index: any) => {
        dispatch(deleteMarker(index));
    }

    const setCoordinates = (coordinates: any) => {
        dispatch(setMarkerCoordinates(coordinates))
    }

    const setText = (title: string, description: string, date: string) => {
        dispatch(setMarkerText(title, description, date));
    }

    const addPoint = () => {
        dispatch(addMarker());
    }

    return (
        <>
            <div className={"Absolute-container"}>
                <InfoPannel pointsList={points} deletePoint={deletePoint}/>
                <AddPanel coordinates={newPointCoordinates} addPoint={addPoint} setPointTexts={setText}/>
            </div>
            <ThemeSelect themes={themes} setTheme={setCurrentTheme}/>
            <MapContainer zoomControl={false} zoom={center.zoom} center={center}>
                { /* я не псих, клянусь, но иначе не происходит ререндер карты. Подозреваю это связано с
                 нюансами работы typescript с тайлами leaflet, тк на Js работает как должно */}
                {currentTheme == themes[0].adress ? <TileLayer url={currentTheme}/> : null}
                {currentTheme == themes[1].adress ? <TileLayer url={currentTheme}/> : null}
                {currentTheme == themes[2].adress ? <TileLayer url={currentTheme}/> : null}
                {currentTheme == themes[3].adress ? <TileLayer url={currentTheme}/> : null}
                <Markers points={points}/>
                <LocationMarker date={now} setCoordinates={setCoordinates}/>
            </MapContainer>
        </>
    );
}
export default MapComponent;