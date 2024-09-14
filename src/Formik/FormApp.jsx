import React from "react";
import { Formik, Form, Field } from "formik";
import { submitSchema } from "./schemas/Schema";
import "./Form.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm: "",
};

function FormApp() {
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={submitSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="signup_form">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" placeholder="Enter your name" />
            <div className="error_container">
              {errors.name && touched.name && (
                <p className="form_error">{errors.name}</p>
              )}
            </div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="Enter your email" />
            <div className="error_container">
              {errors.email && touched.email && (
                <p className="form_error">{errors.email}</p>
              )}
            </div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <div className="error_container">
              {errors.password && touched.password && (
                <p className="form_error">{errors.password}</p>
              )}
            </div>
            <label htmlFor="confirm">Confirm Password</label>
            <Field
              type="password"
              name="confirm"
              placeholder="Enter the password again"
            />
            <div className="error_container">
              {errors.confirm && touched.confirm && (
                <p className="form_error">{errors.confirm}</p>
              )}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormApp;
