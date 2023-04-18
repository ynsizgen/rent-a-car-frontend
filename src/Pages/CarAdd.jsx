import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import IzgenTextInput from "../utilities/customFormControls/IzgenTextInput";
import ProductService from "../services/productService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CarAdd() {
    const CarSchema = Yup.object().shape({
        brandName: Yup.string().required("Marka adı girilmedi."),
        dailyPrice: Yup.number()
            .typeError("Günlük fiyat sayı olmalı")
            .required("Günlük fiyat girilmedi.")
            .min(300,"Günlük fiyat tutarı 300'den küçük olamaz!"),
        enumVehicleType: Yup.string().required("Araç tipi girilmedi."),
        manuelAuto: Yup.boolean().required("Vites tipi girilmedi."),
        modelName: Yup.string().required("Model adı girilmedi."),
        modelYear: Yup.number()
            .typeError("Model yılı sayı girilmeli.")
            .required("Model yılı girilmedi.")
            .max(new Date().getFullYear()+1,"Araç gelecekten gelmiş olamaz.")
            .min("1980","Model yılı 1980'den önce olamaz."),
        plates: Yup.string().required("Plaka girilmedi."),
        seats: Yup.number()
            .typeError("Koltuk sayısı sayı olmalı")
            .required("Koltuk sayısı girilmedi."),
        state: Yup.string().required("Durum girilmedi."),
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


    const handleSubmit = async (data,e) => {
        
        try {
            const productService = new ProductService();
            await productService.postCarData(data);
            toast.success('Araç eklenmiştir.');
        } catch (error) {
            if(error.response.data.message === 'Plate already exists.!')
                toast.error('Plaka başka bir araçta kullanılmış!');
            else
                toast.error('Beklenmedik bir hata meydana geldi.');
        }
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
                        onSubmit={handleSubmit}
                    >
                    Ekle
                    </button>
                    <ToastContainer />                       
                </Form>
            )}
        </Formik>
    );
}
