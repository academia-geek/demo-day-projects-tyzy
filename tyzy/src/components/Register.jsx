import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { ActionFacebookRegister, ActionGoogleRegister, ActionRegisterAsync } from '../redux/actions/LoginActions';
import { BtnRegister, DIVLogin, DivRegister, FieldInput, ImageRegister, IngresaCon, LabelRegistro, LoginRegister, LogoTyzy, RegisterForm, RegisterText, RegisterTitle, SpanInciar } from '../styles/StylesGlobals';
import { Link, NavLink } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
    name: Yup.string().min(4, 'Very short name').max(30, 'Very long name').required("This name is required"),
    email: Yup.string().email('It must be of type name@example.com').required("This email is required"),
    password1: Yup.string().min(6, 'Very short password').max(20, 'Very long password').required("This field is required").oneOf([Yup.ref('password2')], 'Passwords do not match'),
    password2: Yup.string().min(6, 'Very short password').max(20, 'Very long password').required("This field is required").oneOf([Yup.ref('password1')], 'Passwords do not match'),
})

const Register = () => {

    const dispatch = useDispatch()

    return (
        <>
            <DivRegister>
                <ImageRegister>
                    <NavLink to='/landingPage'>
                        <LogoTyzy src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657500435/Tyzy/Logo_fvikwq.png' alt='applogo' />
                    </NavLink>
                </ImageRegister>

                <RegisterForm>
                    <RegisterTitle className='mb-4'>Registrate</RegisterTitle>
                    <RegisterText>Si ya tienes un usuario o email registrado</RegisterText>
                    <LoginRegister>Puedes<Link to="/login"><SpanInciar> Iniciar sesión aquí</SpanInciar></Link></LoginRegister>
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

                            <Form className='d-flex flex-column mt-2'>
                                <div className='d-flex flex-column'>
                                    <LabelRegistro>Email</LabelRegistro>
                                    <FieldInput className='' type="texto" placeholder="Correo electronico" name="name" />
                                    {errors.name && touched.name ?
                                        (<div className='ms-3 fs-6 text-white'>{errors.name}</div>) : null}
                                </div>

                                <div className=' d-flex flex-column'>
                                    <LabelRegistro>Nombre de usuario</LabelRegistro>
                                    <FieldInput className='' type="email" placeholder="Nombre de usuario" name="email" />
                                    {errors.email && touched.email ?
                                        (<div className='ms-3 fs-6 text-white'>{errors.email}</div>) : null}
                                </div>

                                <div className='d-flex flex-column'>
                                    <LabelRegistro>Contraseña</LabelRegistro>
                                    <FieldInput className='' type="password" placeholder="Escribe tu contraseña" name="password1" />
                                    {errors.password1 && touched.password1 ?
                                        (<div className='ms-3 fs-6 text-white'>{errors.password1}</div>) : null}
                                </div>

                                <div className='d-flex flex-column'>
                                    <LabelRegistro>Repetir contraseña</LabelRegistro>
                                    <FieldInput className='' type="password" placeholder="Repite tu contraseña" name="password2" />
                                    {errors.password2 && touched.password2 ?
                                        (<div className='ms-3 fs-6 text-white'>{errors.password2}</div>) : null}
                                </div>

                                <BtnRegister className='BTNRegister' variant="contained" type="submit">
                                    Registrarse
                                </BtnRegister>

                                <div className='d-flex flex-column w-50 mx-auto mt-auto'>
                                    <IngresaCon>O ingresa con</IngresaCon>

                                    <DIVLogin className='d-flex w-50 mx-auto'>
                                        <button type='button' className='border-0 mx-auto'>
                                            <img className='mx-auto IMGLogin' onClick={() => dispatch(ActionGoogleRegister())} src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655830218/proyectoSprint-3/google_iamrtx.png" alt="" />
                                        </button>

                                        <button type='button' className='border-0 mx-auto'>
                                            <img className='mx-auto IMGLogin' onClick={() => dispatch(ActionFacebookRegister())} src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655830218/proyectoSprint-3/facebook_i9do6g.png" alt="" />
                                        </button>
                                    </DIVLogin>
                                </div>
                            </Form>
                        )}
                    </Formik>
                 </RegisterForm>
            </DivRegister>
        </>
    )
}

export default Register;