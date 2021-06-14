import {Badge, Button, Table, Tag} from 'antd';
import React from 'react'

const columns = [
    {
        title: 'Vehicle Type',
        key: 'vehicleType',
        dataIndex: 'vehicleType',
        render: tags => (
            <div>
                {tags.map(tag => {
                    let color ;
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
        title: 'Hired By',
        dataIndex: 'hiredBy',
        key: 'hiredBy',
    },
];

const data = [
    {
        key: '1',
        vehicleType: ['car'],
        regNumber: 'RET 159236',
        numberOfWheels: '4',
        numberOfPassengers: '4',
        hiredBy: 'bond.j.bond@007.gov.co.uk'
    },
    {
        key: '2',
        vehicleType: ['van'],
        regNumber: 'ERT 789321',
        numberOfWheels: '4',
        numberOfPassengers: '3',
        hiredBy: 'regina.phalange@yahoo.com'
    },
]

const RenderVehiclesHired = () => {
    return <Table
        dataSource={data}
        columns={columns}
        bordered
        title={() =>
            <div>
                <Tag>Number of vehicles</Tag>
                <Badge count={data.length} className="site-badge-count-4"/>
            </div>
        }
        pagination={{pageSize: 50}}
        scroll={{y: 800}}
    />
}

export default RenderVehiclesHired;
