import React from "react";
import { useFormik } from "formik";
import { submitSchema } from './schemas/Schema';
import "./Form.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm: "",
};

function Form() {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: submitSchema,
      onSubmit: (values, actions) => {
        console.log(values);
        actions.resetForm();
      },
    });

  return (
    <div className="form">
      <form className="signup_form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className="error_container">
          {errors.name && touched.name && (
            <p className="form_error">{errors.name}</p>
          )}
        </div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className="error_container">
          {errors.email && touched.email && (
            <p className="form_error">{errors.email}</p>
          )}
        </div>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className="error_container">
          {errors.password && touched.password && (
            <p className="form_error">{errors.password}</p>
          )}
        </div>

        <label htmlFor="confirm">Confirm Password</label>
        <input
          type="password"
          id="confirm"
          name="confirm"
          value={values.confirm}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className="error_container">
          {errors.confirm && touched.confirm && (
            <p className="form_error">{errors.confirm}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;