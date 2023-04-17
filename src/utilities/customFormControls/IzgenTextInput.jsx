import {useField } from 'formik'

import React from 'react'

export default function IzgenTextInput({...props }) {
  //console.log(props)
  const [field, meta] = useField(props);
  //console.log(meta)

  return (

    <div className="form-group">
      <input
        {...props}
        {...field}
        className={`form-control ${meta.touched && meta.error ? "is-invalid" : ""}`}
      />
       
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );


}
