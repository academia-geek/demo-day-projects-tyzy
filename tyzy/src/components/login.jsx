import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ActionFacebookRegister, ActionGoogleRegister, ActionLoginAsync } from '../redux/actions/LoginActions';
import { Button } from 'react-bootstrap';
import { DIVLogin } from '../styles/StylesGlobals';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('It must be of type name@example.com').required("This email is required"),
    pass: Yup.string().min(6, 'Very short password').max(20, 'Very lonng password').required("This field is required")
})

export default function Login() { 

    const dispatch = useDispatch()

    return (
        <div>
            <section className='d-flex flex-column mt-5'>
                <h2 className='text-center my-5'>Sing In</h2>
                <Formik
                    initialValues={
                        {
                            email: '',
                            pass: ''
                        }
                    }
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        dispatch(ActionLoginAsync(values.email, values.pass))
                    }}
                >
                    {({ errors, touched }) => (

                        <Form className='d-flex flex-column h-50 w-75 mx-auto'>
                            <div className='mb-2'>
                                <Field className='rounded-pill border-0 p-2 w-100 mx-auto InputRegister' type="email" placeholder="Email" name="email" />
                                {errors.email && touched.email ?
                                    (<div className='ms-3 ERRinput fs-6 text-white'>{errors.email}</div>) : null}
                            </div>

                            <div className='mb-2'>
                                <Field className='rounded-pill border-0 p-2 w-100 mx-auto InputRegister' type="password" placeholder="Password" name="pass" />
                                {errors.pass && touched.pass ?
                                    (<div className='ms-3 ERRinput fs-6 text-white'>{errors.pass}</div>) : null}
                            </div>

                            <Button variant="contained" className='mt-4 rounded-pill border-0 p-2 w-100 mx-auto' type="submit">Sign In</Button>

                            <p className='backSpan-2 text-center mt-2'>Forgot Password ?</p>

                            <div className='d-flex flex-column IMGLogin w-50 mx-auto mt-auto mb-5'>
                                <h3 className='text-center mt-2'>Sing In with</h3>

                                <DIVLogin className='DivButton d-flex  w-50 mx-auto mt-5'>
                                    <button type='button' className='border-0 btnBG mx-auto'>
                                        <img onClick={() => dispatch(ActionGoogleRegister())} className='mx-auto IMGLogin' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655830218/proyectoSprint-3/google_iamrtx.png" alt="" />
                                    </button>


                                    <button type='button' className='border-0 btnBG mx-auto'>
                                        <img className='mx-auto IMGLogin' onClick={() => dispatch(ActionFacebookRegister())} src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655830218/proyectoSprint-3/facebook_i9do6g.png" alt="" />
                                    </button>
                                </DIVLogin>
                            </div>
                        </Form>
                    )}

                </Formik>
                <div className='d-flex justify-content-center'>
                    <span className='my-auto'> D’ont have an account ?</span>
                    <span className='my-auto'>
                        <Link to="/register" className='nav-link my-auto'>Sign In</Link>
                    </span>
                </div>
            </section>
        </div>
    )
}
