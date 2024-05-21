import React from 'react'
import Style from "./index.module.css"


import { Formik, Form, Field, ErrorMessage } from 'formik';
import { usePostFootMutation} from "../../services/ProductQuerySlice"
import * as Yup from 'yup';
import { useState } from "react";

const index = () => {
    const [postFoot]=usePostFootMutation()
    const [newFoot,setNewFoot]=useState({
        title:"",
        Price:"",
        img:"",
        discription:""
    })
  return (
   <>
   
   <div className={Style.body}>
     <h1>Add Foot</h1>
     <Formik
       initialValues={{  
       title:"",
       Price:"",
       img:"",
       discription:"" }}
    //    validate={values => {
    //      const errors = {};
    //      if (!values.email) {
    //        errors.email = 'Required';
    //      } else if (
    //        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //      ) {
    //        errors.email = 'Invalid email address';
    //      }
    //      return errors;
    //    }}
       onSubmit={async(e)=>{
        console.log("new product",newFoot);
        await postFoot(newFoot);
        refetch();
        setNewFoot({
            title:"",
            Price:"",
            img:"",
            discription:""

        })
       }}
     >
       {({ isSubmitting }) => (
         <Form className={Style.form}>
           <label >Title:</label> <br />
           <Field className={Style.input} name="title" type="text"  value={newFoot.title}
          onChange={(e) =>
            setNewFoot({ ...newFoot, title: e.target.value })
          }/>
           {/* {errors.title && touched.title ? (
             <div style={{color:"red"}}>{errors.title}</div>
           ) : null} <br /> */}
            <label >Price:</label> <br />
           <Field className={Style.input} name="Price" type="number" value={newFoot.Price}
          onChange={(e) =>
            setNewFoot({ ...newFoot, Price: e.target.value })
          }  />
           {/* {errors.Price && touched.Price ? (
             <div style={{color:"red"}}>{errors.Price}</div>
           ) : null} */}
           <label >img:</label> <br />
            <Field className={Style.input} name="img" type="url" value={newFoot.img}
          onChange={(e) =>
            setNewFoot({ ...newFoot, img: e.target.value })
          }  />
           {/* {errors.img && touched.img ? (
             <div style={{color:"red"}}>{errors.img}</div>
           ) : null} */}
           <label >discription:</label> <br />
            <Field className={Style.input} name="discription" type="text" value={newFoot.discription}
          onChange={(e) =>
            setNewFoot({ ...newFoot, discription: e.target.value })
          }  />
           {/* {errors.discription && touched.discription ? (
             <div style={{color:"red"}}>{errors.discription}</div>
           ) : null} */}
            <button type="submit">Add</button>
         </Form>
       )}
     </Formik>
   </div>
   
   
   </>
  )
}

export default index
