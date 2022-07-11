import styled from "styled-components";
import { Field } from "formik";

// REGISTRO //

export const DivRegister = styled.div`
    display:flex;
    background-color: rgba(75 ,166 ,149 ,31%);
`

export const ImageRegister = styled.div`
    background-color: aqua;  
    box-shadow: 10px 10px 17px -7px rgba(39,85,86,0.36);
    height: 100vh;
    width:50%;
    border-radius: 0px 30px 30px 0px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1657502584/Tyzy/Rectangle_40_ukbl6s.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export const LogoTyzy = styled.img`
    width:10%  ;
    margin-top:5%;
    margin-left:5%;
`

export const RegisterForm = styled.div`
    height: 80vh;
    width: 30%;
    align-self: center;
    margin:0 auto;
`

export const RegisterTitle = styled.h2`
        font-size: 25px;
        font-weight: 700;
        color:#F26052;
`
export const RegisterText = styled.p`
        font-size: 14px;
        color:#275556;
`

export const LoginRegister = styled.p` 
    font-size: 14px;
    color:#275556;
`

export const SpanInciar = styled.span` 
    color:#F26052;
    font-weight: 600;
`

export const LabelRegistro = styled.label` 
    font-weight: 500;
    color:#275556;
    font-size: 14px;
    margin-top: 18px;
`

export const FieldInput = styled(Field)`
    background: none;
    border-bottom: 1.5px solid #275556;
    margin-top: 10px;
    &:focus{
        outline: none;
    }
`

export const BtnRegister = styled.button`
    background-color: #F26052;
    padding: 12px;
    margin-top: 20px;
    border-radius: 50px;
    color:white;
    box-shadow: 10px 10px 17px -7px rgba(39,85,86,0.36);
    font-weight: 500;
`
export const IngresaCon = styled.h3`
text-align: center;
    margin-top: 40px;
    color:#275556;
    font-size: 14px;
`

export const DIVLogin = styled.div`
margin-top: 20px;
    .IMGLogin {
    -webkit-box-reflect: below 2px
    linear-gradient(to left,
    rgba(0, 0, 0, 0.0),
    rgba(0, 0, 0, 0.2))
}
`

// LOGIN //

export const DivLogin = styled.div`
    display:flex;
    background-color: rgba(242, 96 ,82 ,21%);
`

export const ImageLogin = styled.div`
    background-color: aqua;  
    box-shadow: 10px 10px 17px -7px rgba(39,85,86,0.36);
    height: 100vh;
    width:50%;
    border-radius: 0px 30px 30px 0px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1657502584/Tyzy/pexels-vlada-karpovich-8359637_cw3hjt.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export const LogoTyzy2 = styled.img`
    width:10%  ;
    margin-top:5%;
    margin-left:5%;
`

export const LoginForm = styled.div`
    height: 60vh;
    width: 30%;
    align-self: center;
    margin:0 auto;
`

export const LoginTitle = styled.h2`
        font-size: 25px;
        font-weight: 700;
        color:#F26052;
`
export const LoginText = styled.p`
        font-size: 14px;
        color:#275556;
`

export const SpanInciar2 = styled.span` 
    color:#F26052;
    font-weight: 600;
`

export const LabelInicio = styled.label` 
    font-weight: 500;
    color:#275556;
    font-size: 14px;
    margin-top: 18px;
`

export const FieldInput2 = styled(Field)`
    background: none;
    border-bottom: 1.5px solid #275556;
    margin-top: 10px;
    &:focus{
        outline: none;
    }
`

export const BtnLogin = styled.button`
    background-color: #F26052;
    padding: 12px;
    margin-top: 20px;
    border-radius: 50px;
    color:white;
    box-shadow: 10px 10px 17px -7px rgba(39,85,86,0.36);
    font-weight: 500;
`
export const IngresaCon2 = styled.h3` 
text-align: center;
    margin-top: 40px;
    color:#275556;
    font-size: 14px;
`
/* SERVICES COMPONENT */

export const ServicesDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 10%;
    gap: 10%
`
export const ServiceImg = styled.img`
    width:40%;   
`
export const InfoServices= styled.div`
    width: 40%;
`
export const ServiceTitle = styled.p`
    color:#F26052;
    font-weight:700;
    font-size:40px;
    line-height: 50px;
    width: 80%;
`
export const SpanTitle = styled.span`
    color:#4BA695;
    font-weight:700;
`

export const CardTips = styled.div`
    box-shadow: 10px 10px 17px -7px rgba(39,85,86,0.36);
    display: flex;
    align-items: center;
    gap:20px;
    padding: 20px;
    margin-top: 40px;
    border-radius: 20px;
`

export const IconCard = styled.img`
    width:20%;    
`
export const TitleCard = styled.p`
    font-weight:600;    
`
export const CardTxt = styled.p`
    font-size: 12px;
` 

