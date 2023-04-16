import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
//import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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

  const initialValues ={
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
  
  
    const handleSubmit = (values) => {
        console.log(values)
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
            <label htmlFor="brandName">Marka Adı:</label>
            <Field
              type="text"
              name="brandName"
              value={values.brandName}
              onChange={handleChange}
              className={`form-control ${
                touched.brandName && errors.brandName ? "is-invalid" : ""
              }`}
            />
            {touched.brandName && errors.brandName && (
              <div className="invalid-feedback">{errors.brandName}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="modelName">Model Adı:</label>
            <Field
              type="text"
              name="modelName"
              value={values.modelName}
              onChange={handleChange}
              className={`form-control ${
                touched.modelName && errors.modelName ? "is-invalid" : ""
              }`}
            />
            {touched.modelName && errors.modelName && (
              <div className="invalid-feedback">{errors.modelName}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="modelYear">Model Yılı:</label>
            <Field
              type="number"
              name="modelYear"
              value={values.modelYear}
              onChange={handleChange}
              className={`form-control ${
                touched.modelYear && errors.modelYear ? "is-invalid" : ""
              }`}
            />
            {touched.modelYear && errors.modelYear && (
              <div className="invalid-feedback">{errors.modelYear}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="plates">Plaka:</label>
            <Field
              type="text"
              name="plates"
              value={values.plates}
              onChange={handleChange}
              className={`form-control ${
                touched.plates && errors.plates ? "is-invalid" : ""
              }`}
            />
            {touched.plates && errors.plates && (
              <div className="invalid-feedback">{errors.plates}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="seats">Koltuk Sayısı:</label>
            <Field
              type="number"
              name="seats"
              value={values.seats}
              onChange={handleChange}
              className={`form-control ${
                touched.seats && errors.seats ? "is-invalid" : ""
              }`}
            />
            {touched.seats && errors.seats && (
              <div className="invalid-feedback">{errors.seats}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="dailyPrice">Günlük Fiyat:</label>
            <Field
              type="number"
              name="dailyPrice"
              value={values.dailyPrice}
              onChange={handleChange}
              className={`form-control ${
                touched.dailyPrice && errors.dailyPrice ? "is-invalid" : ""
              }`}
            />
            {touched.dailyPrice && errors.dailyPrice && (
              <div className="invalid-feedback">{errors.dailyPrice}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="enumVehicleType">Araç Tipi:</label>
            <Field
              as="select"
              name="enumVehicleType"
              value={values.enumVehicleType}
              onChange={handleChange}
              className={`form-control ${
                touched.enumVehicleType && errors.enumVehicleType
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
                  className={`form-check-input ${
                    touched.manuelAuto && errors.manuelAuto ? "is-invalid" : ""
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
                  className={`form-check-input ${
                    touched.manuelAuto && errors.manuelAuto ? "is-invalid" : ""
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
            <label htmlFor="state">Durum:</label>
            <Field
              as="select"
              name="state"
              value={values.state}
              onChange={handleChange}
              className={`form-control ${
                touched.state && errors.state ? "is-invalid" : ""
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
          <button type="submit" className="btn btn-primary">
            Araç Ekle
          </button>
        </Form>
      )}
    </Formik>
  );
}
