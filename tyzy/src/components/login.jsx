import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ActionFacebookRegister, ActionGoogleRegister, ActionLoginAsync } from '../redux/actions/LoginActions';
import { BtnLogin, DIVLogin, DivLogin, FieldInput2, ImageLogin, IngresaCon2, LabelInicio, LoginForm, LoginText, LoginTitle, LogoTyzy2, SpanInciar2 } from '../styles/StylesGlobals';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('el correo debe ser de tipo nombre@ejemplo.com').required("correo electronico requerido"),
    pass: Yup.string().min(6, 'contraseña muy larga').max(20, 'contraseña muy corta').required("contraseña requerida")
})

export default function Login() {

    const dispatch = useDispatch()

    return (
        <>
            <DivLogin>
                <ImageLogin>
                    <NavLink to='/landingPage'>
                        <LogoTyzy2 src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657500435/Tyzy/Logo_fvikwq.png' alt='applogo' />
                    </NavLink>
                </ImageLogin>

                <LoginForm>
                    <LoginTitle className='mb-4'>Inicia sesión</LoginTitle>
                    <LoginText>¿No estás registrado aún?, puedes<Link to="/register"><SpanInciar2> registrate aquí</SpanInciar2></Link></LoginText>

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

                            <Form className='d-flex flex-column'>
                                <div className='mb-2 d-flex flex-column'>
                                    <LabelInicio>Correo electronico</LabelInicio>
                                    <FieldInput2 className='InputRegister' type="email" placeholder="Email" name="email" />
                                    {errors.email && touched.email ?
                                        (<div className='ms-3 ERRinput fs-6 text-white'>{errors.email}</div>) : null}
                                </div>

                                <div className='mb-2 d-flex flex-column'>
                                    <LabelInicio>Contraseña</LabelInicio>
                                    <FieldInput2 className='InputRegister' type="password" placeholder="******" name="pass" />
                                    {errors.pass && touched.pass ?
                                        (<div className='ms-3 ERRinput fs-6 text-white'>{errors.pass}</div>) : null}
                                </div>

                                <BtnLogin variant="contained" className='mt-4 rounded-pill border-0 p-2 w-100 mx-auto' type="submit">Iniciar Sesión</BtnLogin>

                                <div className='d-flex flex-column w-50 mx-auto mt-auto mb-5'>
                                    <IngresaCon2>O ingresa con</IngresaCon2>

                                    <DIVLogin className='DivButton d-flex  w-75 mx-auto'>
                                        <button type='button' className='border-0 mx-auto'>
                                            <img onClick={() => dispatch(ActionGoogleRegister())} className='mx-auto IMGLogin' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655830218/proyectoSprint-3/google_iamrtx.png" alt="" />
                                        </button>

                                        <button type='button' className='border-0 mx-auto'>
                                            <img className='mx-auto IMGLogin' onClick={() => dispatch(ActionFacebookRegister())} src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655830218/proyectoSprint-3/facebook_i9do6g.png" alt="" />
                                        </button>
                                    </DIVLogin>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </LoginForm>
            </DivLogin>
        </>
    )
}
