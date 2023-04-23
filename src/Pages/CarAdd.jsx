import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import IzgenTextInput from "../utilities/customFormControls/IzgenTextInput";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import {addCar} from "../react/features/car/postSlice";

export default function CarAdd() {
    const CarSchema = Yup.object().shape({
        brandName: Yup.string().required("Marka adı girilmedi."),
        dailyPrice: Yup.number()
            .typeError("Günlük fiyat sayı olmalı")
            .required("Günlük fiyat girilmedi.")
            .min(300,"Günlük fiyat tutarı 300'den küçük olamaz!"),
        enumVehicleType: Yup.string().required("Araç tipi girilmedi."),
        manuelAuto: Yup.boolean().oneOf([true,false], "Vites tipi seçilmeli").required("Vites tipi girilmedi."),
        modelName: Yup.string().required("Model adı girilmedi."),
        modelYear: Yup.number()
            .typeError("Model yılı sayı girilmeli.")
            .required("Model yılı girilmedi.")
            .max(new Date().getFullYear()+1,"Araç gelecekten gelmiş olamaz.")
            .min(1980,"Model yılı 1980'den önce olamaz."),
        plates: Yup.string().required("Plaka girilmedi."),
        seats: Yup.number()
            .typeError("Koltuk sayısı sayı olmalı")
            .required("Koltuk sayısı girilmedi.")
            .max(20,"Koltuk sayısı 20'den fazla olamaz!"),
        state: Yup.string().required("Durum girilmedi."),
    });

    
    const initialValues = {
        brandName: "nissan",
        dailyPrice: 2000.22,
        enumVehicleType: 1,
        manuelAuto: false,
        modelName: "qashqai",
        modelYear: 2022,
        plates: "34asd123",
        seats: 5,
        state: 2,
    }   
    
    const dispatch = useDispatch()

    
    const handleSubmit =  (data) => {
        dispatch(addCar(data)).then(response => {
          if(response.payload=="Plate already exists.!"){
            toast.error("Araç ekleme işlemi başarısız oldu. Plaka daha önce kullanılmış.");
          }else if (response.error){
            toast.error("Beklenmedik bir hata meydana geldi. Lütfen daha sonra tekrar deneyiniz.")
          } else {
            toast.success("Araç başarıyla eklendi.")
          }
        });
    };

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={CarSchema}
            onSubmit={handleSubmit}
        >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="brandName">Marka:</label>
                        <IzgenTextInput type="text" name="brandName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="modelName">Model:</label>
                        <IzgenTextInput type="text" name="modelName" />
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
                        <label htmlFor="modelYear">Model Yılı:</label>
                        <IzgenTextInput type="number" name="modelYear" />
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

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                    Ekle
                    </button>
                    <ToastContainer />                       
                </Form>
            )}
        </Formik>
    );
}
