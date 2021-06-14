import {Badge, Button, Table, Tag} from 'antd';
import React from 'react';
import HireVehicleModal from "./actions/HireVahicleModal";
import {PlusOutlined} from "@ant-design/icons";

const columns = [
    {
        title: 'Vehicle Type',
        key: 'vehicleType',
        dataIndex: 'vehicleType',
        render: tags => (
            <div>
                {tags.map(tag => {
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
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </div>
        ),
    },
    {
        title: 'Registration Number',
        dataIndex: 'regNumber',
        key: 'regNumber',
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
            <HireVehicleModal/>
    }
];

const data = [
    {
        key: '1',
        vehicleType: ['car'],
        regNumber: 'CQ12 ERT',
        numberOfWheels: '4',
        numberOfPassengers: '4',
    },
    {
        key: '2',
        vehicleType: ['car'],
        regNumber: 'GT04 WRM',
        numberOfWheels: '4',
        numberOfPassengers: '5',
    },
    {
        key: '3',
        vehicleType: ['van'],
        regNumber: 'ZX23 BJI',
        numberOfWheels: '4',
        numberOfPassengers: '3',
    },
    {
        key: '4',
        vehicleType: ['convertible'],
        regNumber: 'UT93 HUJ',
        numberOfWheels: '4',
        numberOfPassengers: '2',
    },
    {
        key: '5',
        vehicleType: ['motorbike'],
        regNumber: 'MO96 DUP',
        numberOfWheels: '2',
        numberOfPassengers: '1',
    }
]

function RenderVehiclesAvailable() {

    return <Table
        dataSource={data}
        columns={columns}
        bordered
        title={() =>
            <div>
                <Tag>Number of vehicles</Tag>
                <Badge count={data.length} className="site-badge-count-4"/>
                <br/><br/>
                <Button
                    type="primary" shape="round" icon={<PlusOutlined/>} size="small">
                    Add New Vehicle
                </Button>
            </div>
        }
        pagination={{pageSize: 50}}
        scroll={{y: 800}}
        rowKey={(student) => student.id}
    />
}

export default RenderVehiclesAvailable;
