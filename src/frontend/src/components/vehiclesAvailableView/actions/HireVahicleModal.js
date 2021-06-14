import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import HireVehicleForm from "./HireVehicleForm";

const HireVehicleModal = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Hire
            </Button>
            <Modal
                title="All we need is your email"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>
                ]}
            >
                <HireVehicleForm />
            </Modal>
        </div>
    );
};

export default HireVehicleModal;
