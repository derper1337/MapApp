import {Button, Card} from "antd";
import {DeleteOutlined} from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import { Empty } from 'antd';

const InfoPannel = ({pointsList, deletePoint}: any) => {

    let markerList = pointsList.map((p: any) => {
        return <Card style={{marginBottom: "10px"}} size={"small"} key={pointsList.indexOf(p, 0)}>
            <Button danger icon={<DeleteOutlined/>} style={{float: "right"}} onClick={()=>{deletePoint(pointsList.indexOf(p, 0))}}/>
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
        <Card className={"Info-container"} title={"Active markers"}>
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
export default InfoPannel;