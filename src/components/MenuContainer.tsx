import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {NavLink} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Navigation menu', 'sub', <SettingOutlined />, [
        getItem(<NavLink to={"/"}>'Map'</NavLink>, '1'),
        getItem(<NavLink to={"/List"}>'List of markers'</NavLink>, '2'),
        getItem(<NavLink to={"/addMenu"}>'Add menu'</NavLink>, '3'),
    ]),
];

export default () => (
    <Menu className={"Menu-container"} mode="vertical" items={items} />
);