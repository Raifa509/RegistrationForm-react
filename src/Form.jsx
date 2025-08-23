import React from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useFormik } from 'formik';
import {basicSchema} from './schema';
import swal from 'sweetalert';


const courseOptions = {
  '1': 'Biology',
  '2': 'Computer Science',
  '3': 'Commerce',
  '4': 'Humanities'
};
const onSubmit=(values,{resetForm})=>{
    swal({
  title: "Are you sure?",
  text: "Once submitted, you will not be able to edit",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willSubmit) => {
  if (willSubmit) {
    swal({
     title:'Form Submitted',
     text:`Name : ${values.name}\n
            DOB:${values.dob}\n
            Email:${values.email}\n
            Phone No:${values.phone}\n
            Gender:${values.gender}\n
            Address:${values.address}\n
            Course:${courseOptions[values.course]}` ,
      icon: "success",
    });
    resetForm();
  } else {
    swal("Submisstion canceled,you can edit the form.");
  }
});
    
}

function Form() {
    const { values,errors,touched, handleBlur, handleChange,handleSubmit,resetForm } = useFormik({
        initialValues: {
            name: '',
            dob: '',
            email: '',
            phone: '',
            gender: '',
            address: '',
            course: ''

        },
        validationSchema:basicSchema,
        onSubmit,
    })
    return (
        <>
            <section className='d-flex justify-content-center align-items-center min-vh-100' id='main'>
                <div className='box shadow'>
                    <div className="row">
                        <div className="col-md-5 py-md-5 py-3">
                            <div className='mt-md-2  d-flex flex-column justify-content-center align-items-center h-100'>
                                <h2 className='text-center fx-bold'>Welcome <RiGraduationCapFill /></h2>
                                <h5 className='text-center mt-3 text-justify'>
                                    Begin your journey toward academic<br />excellence with us.
                                </h5>
                                <div className='d-flex justify-content-center align-item-center'>
                                    <img src="/img.png" alt="" className='img-fluid' /></div>
                            </div>
                        </div>

                        <div className="col-md-7 px-md-5 px-2 py-md-1">
                            <div className='ms-md-4'>
                                <h5 className='text-center pb-3 '>Fill the Form</h5>

                                {/* form */}
                               <form onSubmit={handleSubmit} autoComplete='off'>
                                    <input type="text" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} className={`form-control glass-input ${errors.name && touched.name ?'input-error':''}`} placeholder='Full Name' />
                                    {errors.name && touched.name && <p className='error-text'>{errors.name}</p>}

                                    <input type="date" name='dob' value={values.dob} onChange={handleChange} onBlur={handleBlur} className={`form-control mt-2  glass-input ${errors.dob && touched.dob ?'input-error':''}`} />
                                    {errors.dob && touched.dob && <p className='error-text'>{errors.dob}</p>}

                                    <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" className={`form-control mt-2  glass-input  ${errors.email && touched.email?'input-error':''}`} placeholder='Email ID' />
                                    {errors.email && touched.email && <p className='error-text'>{errors.email}</p>}


                                    <input type="tel" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} className={`form-control mt-2 mb-2  glass-input ${errors.phone && touched.phone?'input-error':''}`}  placeholder='+91 XXXXXXXXXX' />
                                    {errors.phone && touched.phone && <p className='error-text'>{errors.phone}</p>}


                                    {/* radio button */}
                                    <FormLabel id="demo-row-radio-buttons-group-label" className={`text-dark radio-style ${errors.gender && touched.gender?'input-error':''} `}>Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="gender" value={values.gender} onChange={handleChange}>
                                        <FormControlLabel className='radio-style' value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel className='radio-style' value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel className='radio-style' value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                    {errors.gender && touched.gender && <p className='error-text'>{errors.gender}</p>}

    
                                    <label htmlFor="" className='radio-style '>Address</label>
                                    <textarea className={`form-control mt-2  glass-input ${errors.address && touched.address?'input-error':''}`} name="address" value={values.address} onChange={handleChange} onBlur={handleBlur} id=""></textarea>
                                    {errors.address && touched.address && <p className='error-text'>{errors.address}</p>}


                                    {/* dropdown */}
                                    <select className={`form-select mt-3 glass-input ${errors.course && touched.course?'input-error':''}`} aria-label="Default select example" id='mydropdown' name='course' value={values.course} onChange={handleChange} onBlur={handleBlur}>
                                        <option value=''>Choose the Course</option>
                                        <option value="1">Biology</option>
                                        <option value="2">Computer Science</option>
                                        <option value="3">Commerce</option>
                                        <option value="4">Humanities</option>
                                    </select>
                                    {errors.course && touched.course && <p className='error-text'>{errors.course}</p>}
    
                                    <div className='text-center mt-4'>
                                        <button type='submit' className="btn me-4 px-4 py-2" style={{ backgroundColor: '#8e44ad', color: 'white' }}>Submit</button>
                                        <button type='button' className="btn px-4 py-2" onClick={resetForm} style={{ backgroundColor: '#e67e22', color: 'white' }}>Reset</button>
    
                                    </div>
                               </form>


                            </div>

                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default Form