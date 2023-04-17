import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import IzgenTextInput from "../utilities/customFormControls/IzgenTextInput";
import ProductService from "../services/productService";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";

export default function CarAdd() {
    const CarSchema = Yup.object().shape({
        brandName: Yup.string().required("Marka adı zorunlu"),
        dailyPrice: Yup.number()
            .typeError("Günlük fiyat sayı olmalı")
            .required("Günlük fiyat zorunlu"),
        enumVehicleType: Yup.string().required("Araç tipi zorunlu"),
        manuelAuto: Yup.boolean().required("Vites tipi zorunlu"),
        modelName: Yup.string().required("Model adı zorunlu"),
        modelYear: Yup.number()
            .typeError("Model yılı sayı olmalı")
            .required("Model yılı zorunlu")
            .min("1950"),
        plates: Yup.string().required("Plaka zorunlu"),
        seats: Yup.number()
            .typeError("Koltuk sayısı sayı olmalı")
            .required("Koltuk sayısı zorunlu"),
        state: Yup.string().required("Durum zorunlu"),
    });

    const initialValues = {
        brandName: "",
        dailyPrice: "",
        enumVehicleType: "",
        manuelAuto: "",
        modelName: "",
        modelYear: "",
        plates: "",
        seats: "",
        state: "",
    }





    const handleSubmit = async (values, { setSubmitting }) => {
        try {
          const response = await fetch("http://localhost:8080/api/cars/addCar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          if (!response.ok) {
            throw new Error("Failed to save car.");
          }
          console.log("Car saved successfully.");
        } catch (error) {
          console.error(error);
        } finally {
          setSubmitting(false);
        }
      };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={CarSchema}
            onSubmit={handleSubmit}
        >
            {({isSubmitting, values, errors, touched, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="brandName">Marka:</label>
                        <IzgenTextInput type="text" name="brandName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dailyPrice">Günlük Fiyat:</label>
                        <IzgenTextInput type="number" name="dailyPrice" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="enumVehicleType">Araç Tipi:</label>
                        <Field
                            as="select"
                            name="enumVehicleType"
                            value={values.enumVehicleType}
                            onChange={handleChange}
                            className={`form-control ${touched.enumVehicleType && errors.enumVehicleType
                                ? "is-invalid"
                                : ""
                                }`}
                        >
                            <option value="">Araç Tipi Seçiniz</option>
                            <option value="SEDAN">Sedan</option>
                            <option value="HATCHBACK">Hatchback</option>
                            <option value="COUPE">Coupe</option>
                            <option value="SUV">SUV</option>
                            <option value="MINIVAN">Minivan</option>
                            <option value="PICKUP">Pickup</option>
                        </Field>
                        {touched.enumVehicleType && errors.enumVehicleType && (
                            <div className="invalid-feedback">{errors.enumVehicleType}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="manuelAuto">Vites Tipi:</label>
                        <div className="form-check">
                            <label className="form-check-label">
                                <Field
                                    type="radio"
                                    name="manuelAuto"
                                    value="true"
                                    checked={values.manuelAuto === "true"}
                                    onChange={handleChange}
                                    className={`form-check-input ${touched.manuelAuto && errors.manuelAuto ? "is-invalid" : ""
                                        }`}
                                />
                                <span>Manuel</span>
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <Field
                                    type="radio"
                                    name="manuelAuto"
                                    value="false"
                                    checked={values.manuelAuto === "false"}
                                    onChange={handleChange}
                                    className={`form-check-input ${touched.manuelAuto && errors.manuelAuto ? "is-invalid" : ""
                                        }`}
                                />
                                <span>Otomatik</span>
                            </label>
                        </div>
                        {touched.manuelAuto && errors.manuelAuto && (
                            <div className="invalid-feedback">{errors.manuelAuto}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="modelName">Model:</label>
                        <IzgenTextInput type="text" name="modelName" />
                    </div>
               
                    <div className="form-group">
                        <label htmlFor="plates">Plaka:</label>
                        <IzgenTextInput type="text" name="plates" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="seats">Koltuk Sayısı:</label>
                        <IzgenTextInput type="number" name="seats" />
                    </div>
        
                    <div className="form-group">
                        <label htmlFor="state">Durum:</label>
                        <Field
                            as="select"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            className={`form-control ${touched.state && errors.state ? "is-invalid" : ""
                                }`}
                        >
                            <option value="">Durum Seçiniz</option>
                            <option value="AVAILABLE">Müsait</option>
                            <option value="RENTED">Kiralandı</option>
                            <option value="MAINTENANCE">Bakımda</option>
                        </Field>
                        {touched.state && errors.state && (
                            <div className="invalid-feedback">{errors.state}</div>
                        )}
                    </div>           

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                    >
                        
                        {isSubmitting ? 'Araç Ekleniyor...' : 'Araç Ekle'}
                    </button>
                </Form>
            )}
        </Formik>
    );
}
