import {Select} from "antd";
const{Option} = Select;

const ThemeSelect = ({themes, setTheme}:any) =>{
    let options = themes.map((t:any)=>{
        return <Option value={t.adress} key={t.name}>{t.name}</Option>
    });

    return <Select className={"Theme-container"}
                   defaultValue={themes[0].name}
                   style={{ width: 240 }}
                   onChange={(value)=>{
                       setTheme(value);
                   }}>
        {options}
    </Select>
}

export default ThemeSelect;