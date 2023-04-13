import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MDBInput, MDBBtn,MDBContainer } from "mdb-react-ui-kit";

const validationSchema = Yup.object().shape({
    createBrandRequest: Yup.object().shape({
        name: Yup.string().required("Brand name is required"),
    }),
    createModelRequest: Yup.object().shape({
        name: Yup.string().required("Model name is required"),
    }),
    dailyPrice: Yup.number().required("Daily price is required"),
    enumVehicleType: Yup.string().required("Vehicle type is required"),
    manuelAuto: Yup.boolean().required("Please select manual or automatic"),
    modelYear: Yup.number().required("Model year is required"),
    plates: Yup.string().required("Plates is required"),
    seats: Yup.number().required("Number of seats is required"),
    state: Yup.string().required("State is required"),
});

const initialValues = {
    createBrandRequest: {
        name: "string",
    },
    createModelRequest: {
        name: "string",
    },
    dailyPrice: 0,
    enumVehicleType: "COUPE",
    manuelAuto: true,
    modelYear: 0,
    plates: "string",
    seats: 0,
    state: "AVAILABLE",
};

const RentalForm = () => {
    const handleSubmit = (values) => {
        console.log(values)
    };

    return (
        <div className="mt-4">
            <MDBContainer>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field
                        as={MDBInput}
                        label="Brand name"
                        name="createBrandRequest.name"
                        type="text"
                        invalid={errors.createBrandRequest?.name && touched.createBrandRequest?.name}
                        feedback={errors.createBrandRequest?.name}
                    />
                    <Field
                        as={MDBInput}
                        label="Model name"
                        name="createModelRequest.name"
                        type="text"
                        invalid={errors.createModelRequest?.name && touched.createModelRequest?.name}
                        feedback={errors.createModelRequest?.name}
                    />
                    <Field
                        as={MDBInput}
                        label="Daily price"
                        name="dailyPrice"
                        type="number"
                        invalid={errors.dailyPrice && touched.dailyPrice}
                        feedback={errors.dailyPrice}
                    />
                    <Field
                        as={MDBInput}
                        label="Vehicle type"
                        name="enumVehicleType"
                        type="text"
                        invalid={errors.enumVehicleType && touched.enumVehicleType}
                        feedback={errors.enumVehicleType}
                    />
                    <Field
                        as={MDBInput}
                        label="Manual or Automatic"
                        name="manuelAuto"
                        type="checkbox"
                        invalid={errors.manuelAuto && touched.manuelAuto}
                        feedback={errors.manuelAuto}
                    />

                    <Field
                        as={MDBInput}
                        label="Model year"
                        name="modelYear"
                        type="number"
                        invalid={errors.modelYear && touched.modelYear}
                        feedback={errors.modelYear}
                    />
                    <Field
                        as={MDBInput}
                        label="Plates"
                        name="plates"
                        type="text"
                        invalid={errors.plates && touched.plates}
                        feedback={errors.plates}
                    />
                    <Field
                        as={MDBInput}
                        label="Number of seats"
                        name="seats"
                        type="number"
                        invalid={errors.seats && touched.seats}
                        feedback={errors.seats}
                    />
                    <Field
                        as={MDBInput}
                        label="State"
                        name="state"
                        type="text"
                        invalid={errors.state && touched.state}
                        feedback={errors.state}
                    />
                    <MDBBtn type="submit">Submit</MDBBtn>
                </Form>
            )}
        </Formik>
        </MDBContainer>
        </div>
    );
};

export default RentalForm;