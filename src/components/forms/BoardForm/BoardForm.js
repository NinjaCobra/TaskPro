import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationNewBoardSchema } from "schems";
import s from "./BoardForm.module.css";

const icons = ["❤️", "👍", "👎", "🤔", "😂", "🤢", "🤬", "🤯"];

const backgrounds = [
  "https://picsum.photos/200.jpg",
  "https://picsum.photos/201.jpg",
  "https://picsum.photos/202.jpg",
  "https://picsum.photos/203.jpg",
  "https://picsum.photos/204.jpg",
  "https://picsum.photos/205.jpg",
  "https://picsum.photos/206.jpg",
  "https://picsum.photos/207.jpg",
  "https://picsum.photos/208.jpgg",
  "https://picsum.photos/209.jpgg",
  "https://picsum.photos/210.jpgg",
  "https://picsum.photos/211.jpgg",
  "https://picsum.photos/212.jpgg",
  "https://picsum.photos/213.jpgg",
  "https://picsum.photos/214.jpgg",
  "https://picsum.photos/215.jpgg",
];

export const BoardForm = () => {
  const initialValues = {
    title: "",
    icon: icons[0],
    background: backgrounds[0],
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationNewBoardSchema}
      onSubmit={onSubmit}
      validateOnBlur
    >
      {({ isSubmitting, isValid, dirty, values, setFieldValue }) => (
      
        <Form className ={s.formbackround}>
           <p className ={s.title}>New board</p>
          <label  className={s.label} >
            <Field className={s.input} type="text" name="title" placeholder="Title" />
            <ErrorMessage name="title" />
          </label>

          <label >
            <p className={s.icontitle}>Icons</p>
            <div className={s.icontainer}>
            {icons.map((icon, index) => (
              <div key={index}>
                <Field
                  type="radio"
                  id={`icon${index}`}
                  name="icon"
                  value= {icon}
                  checked={values.icon === icon}
                  onChange={() => setFieldValue("icon", icon)}
                />
                <label htmlFor={`icon${index}`} className={s.icon}>
                  {icon}
                </label>
              </div>
            ))}
            </div>
            <ErrorMessage name="icon" />
          </label>

          <label >
          <p className={s.icontitle}>Background</p>
          <div className={s.wrapimage}>
                      {backgrounds.map((background, index) => (
              <div className={s.imagecontainer} key={index}>
                <Field
                  type="radio"
                  id={`background${background}`}
                  name="background"
                  value={background}
                  checked={values.background === background}
                  onChange={() => setFieldValue("background", background)}
                />
                <label
                  htmlFor={`background${index}`}
                  className={s.background}
                  style={{ backgroundImage: `url(${background})` }}
                />
              </div>
            ))}
            </div>
            <ErrorMessage name="background" />
          </label>

          <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
            Create
          </button>
        </Form>
       
      )}
    </Formik>
  );
};
