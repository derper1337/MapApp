import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import MapComponent from "./components/MapComponent";
import MenuContainer from "./components/MenuContainer";
import ListOfMarkers from "./components/ListOfMarkers";
import AddMenu from "./components/AddMenu";

function App() {
    return (
        <div className="App">
                <MenuContainer/>
            <Routes>
                <Route path={"/"} element={<MapComponent/>}/>
                <Route path={"/List"} element={<ListOfMarkers/>}/>
                <Route path={"/addMenu"} element={<AddMenu/>}/>
            </Routes>
        </div>
    );
}

export default App;
