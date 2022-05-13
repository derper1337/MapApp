import {Marker, Popup} from "react-leaflet";
import React from "react";

const Markers =({points}:any)=>{
    let pointElements = points.map((p: any) => {
        return <Marker key={points.indexOf(p, 0)} position={[p.lat, p.lng]}>
            <Popup>
                <h3 style={{textAlign: "left"}}>{p.title}</h3>
                <b>Description:</b> <span style={{wordBreak: "break-all"}}>{p.description}</span>
                <div style={{textAlign: "left"}}>
                    <b>Latitude:</b> <span>{p.lat}</span>
                    <br/>
                    <b>Longitude:</b> <span>{p.lng}</span>
                    <br/>
                    <b>Date</b>: {p.date}
                    <br/>
                </div>
            </Popup>
        </Marker>
    })
    return <div>
        {pointElements}
    </div>
}
export default Markers;