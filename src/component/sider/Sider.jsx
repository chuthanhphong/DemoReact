import { MailOutlined,
    SettingOutlined ,
    AppstoreOutlined ,
    AndroidOutlined,
    LaptopOutlined ,
    WindowsOutlined ,
    MediumOutlined ,
    AppleOutlined ,
    DribbbleOutlined,
    QuestionCircleOutlined,
    YoutubeOutlined,
    DesktopOutlined,
    MobileOutlined,
    ShopOutlined

} from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('PC', 'pc', <DesktopOutlined />, [
        getItem('MSI', 'msi', <WindowsOutlined />),
        getItem('DELL', 'dell', <MediumOutlined />, ),
        getItem('APPLE', 'apple', <AppleOutlined />),
        getItem('OTHER', 'other', <DribbbleOutlined />),
    ]),
    getItem('LapTop/MacBook', 'laptop', <LaptopOutlined />, [
        getItem('LapTop', 'lap' ,  <LaptopOutlined />),
        getItem('MacBook', 'mac', <AppleOutlined />,
            [
                getItem('Mac Air', 'air' , <AppleOutlined />),
                getItem('Mac Pro', 'pro', <AppleOutlined />)]),
    ]),
    {
        type: 'divider',
    },
    getItem('Mobile', 'phone', <MobileOutlined />, [
        getItem('Androids', 'adrs' ,<AndroidOutlined /> ),
        getItem('IOS', 'ios', <AppleOutlined />),
    ]),
    getItem('Accessory PC', 'accesPc', <ShopOutlined />, [
        getItem('Keyboard', 'keyb'),
        getItem('Mouse', 'mou'),
        getItem('Headphone', 'hpPc'),
        getItem('Other', 'otpc'),
    ]),
    getItem('Accessory Moblie', 'accesMb', <ShopOutlined />, [
        getItem('charge', 'cha'),
        getItem('HeadPhone', 'hp'),
        getItem('Cabriolet', 'cab'),
        getItem('Other', 'othp'),
    ]),
    getItem('Other', 'odr', null,
        [
        getItem('Question', 'qust' , <QuestionCircleOutlined />),
            getItem('Watch Me', 'watch' , <YoutubeOutlined />)
        ], 'group'),
];
export function SiderWeb() {
    const contentSider : React.CSSProperties = {
        flex: 'unset !important',
        maxWidth: 'unset !important',
        minWidth: 'unset !important',
        width: '300px !important',
    }
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <Menu
            onClick={onClick}
            style={
                contentSider
            }
            defaultSelectedKeys={['1' ,'2', '3', '4']}
            defaultOpenKeys={['pc' , 'laptop', 'phone', 'accesPc', 'accesMb']}
            mode="inline"
            items={items}
        />
    );
}