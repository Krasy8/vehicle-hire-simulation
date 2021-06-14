import React from 'react'
import './App.css';
import {useState, useEffect} from "react";
import {
    Layout,
    Menu,
    Breadcrumb,
    Table,
    Button,
    Badge,
    Tag,
    Image,
    Divider
} from 'antd';
import {
    LoadingOutlined,
    PlusOutlined, CheckCircleOutlined, LockOutlined
} from '@ant-design/icons';
import {showAllAvailableVehicles, showAllHiredVehicles} from "./service/client";
import {errorNotification} from "./components/notifications/Notifications";
import HireVehicleModal from "./components/vehiclesAvailableView/actions/HireVahicleModal";


const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;
const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;
const tagColorSwitch = (tag) => {
    let color;
    if (tag === 'van') {
        color = 'blue';
    } else if (tag === 'convertible') {
        color = 'red'
    } else if (tag === 'motorbike') {
        color = 'purple'
    } else {
        color = 'green'
    }
    return color;
}

const actionsColumnSwitch = (action, data) => {
    let actionContent;
    if (action === 'available') {
        actionContent = <HireVehicleModal />
    }
    if (action === 'hired') {
        actionContent = <Button type='primary'>
            Return
        </Button>
    }
    return actionContent;
}

const columns = (action, data) => [
    {
        title: 'Vehicle Type',
        key: 'type',
        dataIndex: 'type',
        render: (type) =>
            <div>
                <Tag color={tagColorSwitch(type)} key={type}>
                    {type.toUpperCase()}
                </Tag>
            </div>
    },
    {
        title: 'Registration Number',
        dataIndex: 'registrationNumber',
        key: 'registrationNumber',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Number of Wheels',
        dataIndex: 'numberOfWheels',
        key: 'numberOfWheels',
    },
    {
        title: 'Number of Passengers',
        dataIndex: 'numberOfPassengers',
        key: 'numberOfPassengers',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: () =>
            actionsColumnSwitch(action, data)
    }
];

function AppTemp() {
    const [availableVehicles, setAvailableVehicles] = useState([]);
    const [hiredVehicles, setHiredVehicles] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState('1')

    const fetchVehicles = ({key}) => {
        switch (key) {
            case '1':
                setSelectedMenuItem('1')
                break;
            case '2':
                setSelectedMenuItem('2');
                break;
            default:
                break;
        }
    }

    const fetchAvailableVehicles = () =>
        showAllAvailableVehicles()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAvailableVehicles(data);
            }).catch(err => {
            console.log(err)
            err.response.json().then(res => {
                console.log(res)
                errorNotification(
                    "The milk has been spilled...",
                    `${res.message} [${res.status}] [${res.error}]`
                )
            })
        }).finally(() => setFetching(false))

    const fetchHiredVehicles = () =>
        showAllHiredVehicles()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHiredVehicles(data);
            }).catch(err => {
            console.log(err)
            err.response.json().then(res => {
                console.log(res)
                errorNotification(
                    "The milk has been spilled...",
                    `${res.message} [${res.status}] [${res.error}]`
                )
            })
        }).finally(() => setFetching(false))

    useEffect(() => {
        console.log("component is mounted");
        fetchAvailableVehicles();
        fetchHiredVehicles();
    }, []);

    const vehiclesViewSwitch = (selectedMenuItem) => {
        let content;
        let vehiclesView;
        if (selectedMenuItem === '1') {
            content = renderVehiclesAvailableView()
            vehiclesView = 'Available For Hire'
        } else {
            content = renderVehiclesHiredView()
            vehiclesView = 'Currently Hired'
        }
        return [content, vehiclesView];
    }

    const renderVehiclesAvailableView = () => {
        return <div>
            <Table
                dataSource={availableVehicles}
                columns={columns('available', {availableVehicles})}
                bordered
                title={() =>
                    <div>
                        <Tag>Number of vehicles</Tag>
                        <Badge count={availableVehicles.length} className="site-badge-count-4"/>
                        <br/><br/>
                        <Button
                            type="primary" shape="round" icon={<PlusOutlined/>} size="small">
                            Add New Vehicle
                        </Button>
                    </div>
                }
                pagination={{pageSize: 50}}
                scroll={{y: 800}}
            />
        </div>
    }

    const renderVehiclesHiredView = () => {
        return <div>
            <Table
                dataSource={hiredVehicles}
                columns={columns('hired')}
                bordered
                title={() =>
                    <div>
                        <Button
                            type="primary"
                        >
                            Return
                        </Button>
                    </div>
                }
            />
        </div>
    }

    return <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <div className="logo"/>
            <Menu theme="dark" defaultSelectedKeys={selectedMenuItem} mode="inline" onClick={fetchVehicles}>
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
                    <Breadcrumb.Item>{vehiclesViewSwitch(selectedMenuItem)[1]}</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    {vehiclesViewSwitch(selectedMenuItem)[0]}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                <Image width={75}
                       src={"https://avatars.githubusercontent.com/u/52803882?s=80&v=4"}
                />
                <Divider>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/Krasy8">
                        Click here to visit my profile on GitHub
                    </a>
                </Divider>
            </Footer>
        </Layout>
    </Layout>
}

export default AppTemp;
