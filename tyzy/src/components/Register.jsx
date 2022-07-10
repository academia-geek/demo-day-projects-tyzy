import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ActionFacebookRegister, ActionGoogleRegister, ActionRegisterAsync } from '../redux/actions/LoginActions';
import { Button } from 'react-bootstrap';

const SignupSchema = Yup.object().shape({
    name: Yup.string().min(4, 'Very short name').max(30, 'Very long name').required("This name is required"),
    email: Yup.string().email('It must be of type name@example.com').required("This email is required"),
    password1: Yup.string().min(6, 'Very short password').max(20, 'Very long password').required("This field is required").oneOf([Yup.ref('password2')], 'Passwords do not match'),
    password2: Yup.string().min(6, 'Very short password').max(20, 'Very long password').required("This field is required").oneOf([Yup.ref('password1')], 'Passwords do not match'),
})

const Register = () => {

    const dispatch = useDispatch()

    return (
        <div className='d-flex flex-column mt-5'>
            <h2 className='text-center mt-5 mb-4'>Sing In</h2>
            <Formik
                initialValues={
                    {
                        name: '',
                        email: '',
                        password1: '',
                        password2: '',
                    }
                }
                validationSchema={SignupSchema}
                onSubmit={values => {
                    dispatch(ActionRegisterAsync(values.name, values.email, values.password1))
                }}
            >
                {({ errors, touched }) => (

                    <Form className='d-flex flex-column h-50 w-75 mx-auto '>
                        <div className='mb-2'>
                            <Field className='rounded-pill border-0 p-2 w-100 mx-auto InputRegister' type="texto" placeholder="Full name" name="name" />
                            {errors.name && touched.name ?
                                (<div className='ms-3 ERRinput fs-6 text-white'>{errors.name}</div>) : null}
                        </div>

                        <div className='mb-2'>
                            <Field className='rounded-pill border-0 p-2 w-100 mx-auto InputRegister' type="email" placeholder="Email" name="email" />
                            {errors.email && touched.email ?
                                (<div className='ms-3 ERRinput fs-6 text-white'>{errors.email}</div>) : null}
                        </div>

                        <div className='mb-2'>
                            <Field className='rounded-pill border-0 p-2 w-100 mx-auto InputRegister' type="password" placeholder="Password" name="password1" />
                            {errors.password1 && touched.password1 ?
                                (<div className='ms-3 ERRinput fs-6 text-white'>{errors.password1}</div>) : null}
                        </div>

                        <div className=''>
                            <Field className='rounded-pill border-0 p-2 w-100 mx-auto InputRegister' type="password" placeholder="Confirm Password" name="password2" />
                            {errors.password2 && touched.password2 ?
                                (<div className='ms-3 ERRinput fs-6 text-white'>{errors.password2}</div>) : null}
                        </div>

                        <Button className='BTNRegister mt-2 rounded-pill m-0 border-0 p-2 w-100 mx-auto' variant="contained" type="submit">
                            Register
                        </Button>

                        <div className='d-flex flex-column w-50 mx-auto mt-auto mb-5'>
                            <h3 className='mx-auto mt-2'>OR Sing In with</h3>

                            <div className='d-flex w-50 mx-auto'>
                                <button type='button' className='border-0 btnBG mx-auto'>
                                    <img className='mx-auto' onClick={() => dispatch(ActionGoogleRegister())} src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655830218/proyectoSprint-3/google_iamrtx.png" alt="" />
                                </button>

                                <button type='button' className='border-0 btnBG mx-auto'>
                                    <img className='mx-auto' onClick={() => dispatch(ActionFacebookRegister())} src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655830218/proyectoSprint-3/facebook_i9do6g.png" alt="" />
                                </button>
                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
            <div className='d-flex justify-content-center'>
                <span className='my-auto'>Back to </span>
                <span className='my-auto'>
                    <Link to="/" className='nav-link my-auto'>login</Link>
                </span>
            </div>
        </div>
    )
}

export default Register;