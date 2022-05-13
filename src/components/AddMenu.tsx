import React, {useState} from "react";
import {Form, Input, Button, Divider} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {addMarker, setMarkerCoordinates, setMarkerText} from "../redux/actions";
import {MapContainer, TileLayer} from "react-leaflet";
import Markers from "./Markers";
import LocationMarker from "./LocationMarker";

const AddMenu = () => {
    const coordinates = useSelector((state: any) => state.app.newPointCoordinates);
    const points = useSelector((state: any) => state.app.points);
    const center = useSelector((state: any) => state.app.startingCoordinates);
    const now = new Date();

    let dispatch = useDispatch();
    const setPointTexts = (title: string, description: string, date: string) => {
        dispatch(setMarkerText(title, description, date));
    }
    const addPoint = () => {
        dispatch(addMarker());
    }
    const setCoordinates = (coordinates: any) => {
        dispatch(setMarkerCoordinates(coordinates))
    }
    const [form] = Form.useForm();



    let lng = coordinates.lng;
    let lat = coordinates.lat;

    let [newPointTitle, setNewPointTitle] = useState("");
    let [newPointDescription, setNewPointDescription] = useState("");

    const onSubmit = () => {
        let now = new Date();
        let date = now.toString();
        setPointTexts(newPointTitle, newPointDescription, date);
        addPoint();
        form.resetFields();
    }

    return <div className={"Add-container"}>
        <Form style={{padding: "20px"}} form={form}
              onFinish={onSubmit}>
            <Form.Item
                name={"title"}
                rules={[{required: true, message: 'name of the marker required'}]}
            >
                <Input placeholder={"Marker's name"} value={newPointTitle}
                       onChange={(e) => setNewPointTitle(e.target.value)}/>
            </Form.Item>

            <Form.Item
                name={"description"}
            >
                <Input.TextArea style={{resize: "none"}}
                                placeholder={"description"}
                                value={newPointDescription}
                                onChange={(e) => setNewPointDescription(e.target.value)}/>
            </Form.Item>

            <Button type={'primary'} htmlType={"submit"}> Add marker</Button>

            <br/>
            <br/>
            <div style={{margin:"auto", width:"80vw", height:"60vh", overflowY:"hidden", overflowX:"hidden"}}>
                <MapContainer zoomControl={false} zoom={center.zoom} center={center}>
                    <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}/>
                    <Markers points={points}/>
                    <LocationMarker date={now} setCoordinates={setCoordinates}/>
                </MapContainer>
            </div>
        </Form>
    </div>
}

export default AddMenu;