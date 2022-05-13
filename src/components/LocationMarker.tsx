
import React, {useState} from "react";
import {Marker, Popup, useMapEvents} from "react-leaflet";


const LocationMarker = ({date, setCoordinates}:any) => {
    const [markerPosition, setMarkerPosition]: any = useState(null)
    const map = useMapEvents({
        click(event) {
            setMarkerPosition(event.latlng);
            setCoordinates({...event.latlng});
        }
    })
    return markerPosition === null ? null : (
        <Marker position={markerPosition}>
            <Popup>
                <h3 style={{textAlign: "left"}}>You can set marker by using the side pannel</h3>
                <div style={{textAlign: "left"}}>
                    <b>Latitude:</b> <span>{markerPosition.lat}</span>
                    <br/>
                    <b>Longitude:</b> <span>{markerPosition.lng}</span>
                    <br/>
                    <b>Date</b>: {date.toString()}
                    <br/>
                </div>
            </Popup>
        </Marker>
    )
}

export default LocationMarker;
