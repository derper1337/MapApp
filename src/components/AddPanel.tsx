
import {useState} from "react";
import {Form, Input, Button, Divider} from "antd";

const AddPanel = ({coordinates, addPoint, setPointTexts}: any) => {
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
            <Divider>Coordinates</Divider>
            <div style={{textAlign: "left", marginBottom: "20px"}}>
                Latitude: <span style={{float: "right"}}>{lat}</span>
                <br/>
                Longitude: <span style={{float: "right"}}>{lng}</span>
            </div>
            <Button type={'primary'} htmlType={"submit"}> Add marker</Button>
        </Form>
    </div>
}

export default AddPanel;