import React from "react";
import './MainLayout.css'
import {Layout, Menu, Breadcrumb} from 'antd';
import {
    CheckCircleOutlined,
    LockOutlined
} from '@ant-design/icons';
import RenderVehiclesAvailable from "../components/vehiclesAvailableView/RenderVehiclesAvailable";
import RenderVehiclesHired from "../components/vehiclesHiredView/RenderVehiclesHired";

const {Header, Content, Footer, Sider} = Layout;

class MainLayout extends React.Component {
    state = {
        collapsed: false,
        selectedMenuItem: '1',
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    fetchVehicles = ({key}) => {
        switch (key) {
            case '1':
                this.setState({selectedMenuItem: '1'});
                break;
            case '2':
                this.setState({selectedMenuItem: '2'});
                break;
            default:
                break;
        }
    };


    render() {
        const {collapsed} = this.state;
        let content;
        let vehiclesView;
        if (this.state.selectedMenuItem === '1') {
            content = RenderVehiclesAvailable()
            vehiclesView = 'Available For Hire'
        } else {
            content = RenderVehiclesHired()
            vehiclesView = 'Currently Hired'
        }

        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={this.state.selectedMenuItem} mode="inline" onClick={this.fetchVehicles}>
                        <Menu.Item key="1" icon={<CheckCircleOutlined/>}>
                            Available vehicles
                        </Menu.Item>
                        <Menu.Item key="2" icon={<LockOutlined/>}>
                            Vehicles hired
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Vehicles</Breadcrumb.Item>
                            <Breadcrumb.Item>{vehiclesView}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            {content}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;
