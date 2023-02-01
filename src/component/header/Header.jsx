import React, { useState } from 'react';
import { WechatOutlined,
    SmileOutlined ,
    HomeOutlined ,
    ShoppingCartOutlined ,
    MenuOutlined ,
    FacebookOutlined,
    UserOutlined,
    LogoutOutlined,
    NotificationOutlined

} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';


export function HeaderWeb(){
    const headerStyle: React.CSSProperties = {
        display : 'flex',
        textAlign: 'center',
        justifyContent : 'space-between',
        width: '100%'
    };

    const items  : MenuProps['item'] = [
        {
            label : 'Home',
            key : 'home',
            icon : <HomeOutlined />
        },
        {
            label : 'Favorite',
            key : 'favorite',
            icon : <SmileOutlined />
        },
        {
            label : 'Chat',
            key : 'chat',
            icon : <WechatOutlined />
        },
        {
            label : 'cart',
            key : 'cart',
            icon : <ShoppingCartOutlined />
        },
        {
            label : 'More',
            key : 'more',
            icon : <MenuOutlined />,
            children : [
                {
                    label : 'FaceBook',
                    icon : <FacebookOutlined />
                },
                {
                    label : 'Info',
                    icon : <UserOutlined />
                },
                {
                    label : 'Logout',
                    icon : <LogoutOutlined />
                }
            ]
        }
    ]
    const [current, setCurrent] = useState('Home');
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        console.log(e)
    };
    return <div style={headerStyle} >
        <div>
            <img style={{width : '97px'}}  src ="https://t3.ftcdn.net/jpg/03/32/86/72/360_F_332867276_m7XiTTagNtOtKTekcB5hRzSUmlL40m7d.jpg" alt="logo"/>
            <NotificationOutlined />
        </div>
        <Menu style ={{paddingLeft : '40px'}}   onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </div>
}