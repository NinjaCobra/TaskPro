import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationColumnSchema } from "..//..//..//schems/validationColumnSchema";
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import s from "./ColumnForm.module.css"


export const ColumnForm = ({ setTitle, defaultValues }) => {
  const initialValues = {
    title: "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTitle(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={defaultValues? defaultValues : initialValues}
      validationSchema={validationColumnSchema}
      onSubmit={onSubmit}
      validateOnBlur
    >
      {({ isSubmitting, dirty, handleSubmit }) => (
          <div className={s.wrap}>
        <Form onSubmit={handleSubmit} className={s.form}>
            <Field 
             className={s.input}
            type="text" name="title"
            placeholder="Title"  />
            <ErrorMessage name="title" />

          <Button title="Add" type="submit" disabled={isSubmitting || !dirty} />
        </Form></div>
      )}
    </Formik>
  );
};
