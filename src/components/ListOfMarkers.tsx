import InfoPannel from "./InfoPannel";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteMarker} from "../redux/actions";
import {Button, Card, Empty} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";

const ListOfMarkers =()=>{
    const points = useSelector((state: any) => state.app.points);
    let dispatch = useDispatch();
    const deletePoint = (index: any) => {
        dispatch(deleteMarker(index));
    }

    let markerList = points.map((p: any) => {
        return <Card style={{marginBottom: "10px"}} size={"small"} key={points.indexOf(p, 0)}>
            <Button danger icon={<DeleteOutlined/>} style={{float: "right"}} onClick={()=>{deletePoint(points.indexOf(p, 0))}}/>
            <h3 style={{textAlign: "left"}}>{p.title}</h3>
            <div style={{textAlign: "left"}}>
                <b>Description</b>: {p.description}
                <br/>
                <b>Coordinates</b>: {p.lng} and {p.lat}
                <br/>
                <b>Date</b>: {p.date}
                <br/>
            </div>
        </Card>
    })

    return <div>
        <Card className={"Info-container"} style={{maxHeight:"unset"}} title={"Active markers"}>
            {markerList.length===0 ? <Empty/> : null}
            <QueueAnim animConfig={[
                { opacity: [1, 0], translateY: [0, -50] },
                { opacity: [1, 0], translateY: [0, -50] }
            ]}>
                {markerList}
            </QueueAnim>
        </Card>
    </div>
}

export default ListOfMarkers