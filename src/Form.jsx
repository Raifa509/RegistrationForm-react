import React from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';


function Form() {
    return (
        <>
            <section className='d-flex justify-content-center align-items-center min-vh-100' id='main'>
                <div className='box shadow'>
                    <div className="row">
                        <div className="col-md-5 py-5">
                            <div className='mt-2  d-flex flex-column justify-content-center align-items-center h-100'>
                                <h2 className='text-center fx-bold'>Welcome <RiGraduationCapFill /></h2>
                                <h5 className='text-center mt-3 text-justify'>
                                    Begin your journey toward academic<br />excellence with us.
                                </h5>
                                <div className='d-flex justify-content-center align-item-center'>
                                    <img src="/img.png" alt="" width={360} /></div>
                            </div>
                        </div>

                        <div className="col-md-7 px-5 py-1">
                            <div className='ms-4'>
                                <h5 className='text-center pb-3 '>Fill the Form</h5>
                                <input type="text" className="form-control mb-3 glass-input" placeholder='Full Name' />
                                <input type="date" className="form-control mb-3  glass-input" />
                                <input type="email" className="form-control mb-3  glass-input" placeholder='Email ID' />
                                <input type="phone" className="form-control mb-3  glass-input" placeholder='+91 XXXXXXXXXX' />

                                {/* radio button */}
                                <FormLabel id="demo-row-radio-buttons-group-label" className='text-dark radio-style '>Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group">
                                    <FormControlLabel className='radio-style' value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel className='radio-style' value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel className='radio-style' value="other" control={<Radio />} label="Other" />
                                </RadioGroup>


                                <label htmlFor="" className='radio-style '>Address</label>
                                <textarea className='form-control mt-2  glass-input' name="" id=""></textarea>

                                {/* dropdown */}
                                <select className="form-select mt-3 glass-input" aria-label="Default select example" id='mydropdown'>
                                    <option selected>Choose the Course</option>
                                    <option value="1">Biology</option>
                                    <option value="2">Computer Science</option>
                                    <option value="3">Commerce</option>
                                    <option value="4">Humanities</option>
                                </select>


                                <div className='text-center mt-4'>
                                    <div className="btn me-4 px-4 py-2" style={{ backgroundColor: '#8e44ad', color: 'white' }}>Submit</div>
                                    <div className="btn px-4 py-2" style={{ backgroundColor: '#e67e22', color: 'white' }}>Reset</div>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default Form