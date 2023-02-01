import { React,  useState } from 'react';
import { DatePicker, message , Button, theme } from 'antd';
import 'antd/dist/reset.css';
import './index.css';
import {HeaderWeb} from "./component/header/Header";
import {SiderWeb} from "./component/sider/Sider"
import {ContentProduct} from "./component/content/Content";
import { Layout, Space } from 'antd';

export  function TestReatch ()  {
     const [date, setDate] = useState(null);
     const handleChange = (value) => {
         message.info(`Selected Date : ${value ? value.format('YYYY-MM-DD') : 'None'}`)
         setDate(value);
     };
     const handleClick = (value) => {
         console.log('vao day')
         message.info(`you are click , noww date iss ${value ? value.format('DD/MM/YYYY')  : 'NONE'}`)
     };

    const { useToken } = theme;
    const { token } = useToken();
    const { Header, Footer, Sider, Content } = Layout;

    const styleHeader  : React.CSSProperties  = {
        display : 'flex',
        backgroundColor : '#ffffff'
    }
    const contentStyle: React.CSSProperties = {
    };
    const layoutStyle : React.CSSProperties = {
        paddingTop : '0'
    }



const footerStyle: React.CSSProperties = {
textAlign: 'center',
color: '#fff',
backgroundColor: '#7dbcea',
};

return (
<Layout>
 <Header style={styleHeader}>
     <HeaderWeb/>
 </Header>
 <Layout style={layoutStyle}>
     <Sider>
         <SiderWeb/>
     </Sider>
     <Content style={contentStyle}>
         <ContentProduct/>
     </Content>
 </Layout>
 <Footer style={footerStyle}>Footer</Footer>
</Layout>

);
}
