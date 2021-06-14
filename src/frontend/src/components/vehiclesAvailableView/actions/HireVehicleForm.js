import React from 'react';
import {Formik} from "formik";
import {Input, Button, Tag, Modal} from "antd";

import {hireVehicle} from "../../../service/client";

const inputBottomMargin = {marginBottom: "10px"};
const tagStyle = {backgroundColor: "#f50", color: "white", ...inputBottomMargin};

function vehicleHireHandler() {
    console.log("vehicle hired")
}

const HireVehicleForm = () => (
    <Formik
        initialValues={{email: ''}}
        validate={values => {
            let errors = {};

            if (!values.email) {
                errors.email = "Email required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }
            return errors;
        }}
        onSubmit={vehicleHireHandler}
    >
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              submitForm,
              isValid
          }) => (
            <form onSubmit={handleSubmit}>
                <Input
                    style={inputBottomMargin}
                    name="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="email, e.g example@gmail.com"
                />
                {errors.email && touched.email && (
                    <Tag style={tagStyle}>{errors.email}</Tag>
                )}
                <Button
                    onClick={() => submitForm()}
                    type={"submit"}
                    disabled={isSubmitting | (touched && !isValid)}
                >
                    Submit
                </Button>
            </form>
        )}
    </Formik>
);

export default HireVehicleForm;
