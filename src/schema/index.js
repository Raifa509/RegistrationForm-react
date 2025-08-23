import * as yup from "YUP";

export const basicSchema=yup.object().shape({
    name:yup.string().required('Full Name is required').min(3,'Name must be at least 3 characters long'),
    dob:yup.date().required('Full Name is required').max(new Date(),'Date of Birth cannot be in the future'),

    email:yup.string().email('Enter a valid email').required('Email is required').matches(/^[\w-.]+@gmail\.com$/, 'Only Gmail addresses are allowed'),

    phone:yup.string().required('Phone number is required').matches(/^[0-9]{10}$/,'Phone number must be 10 digits'),
    gender:yup.string().oneOf(['male','female','other'],'Please select a gender').required('Gender is required'),

    address:yup.string().required('Address is required').min(10,'Address should be at least 10 characters'),

    course:yup.string().required('Please select a course').notOneOf([''],'Please select a course')

});