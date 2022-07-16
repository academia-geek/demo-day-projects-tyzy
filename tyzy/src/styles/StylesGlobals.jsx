import styled from "styled-components";
import { Field } from "formik";
import { Modal } from "react-bootstrap";

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
    margin-top: 4%;
`

export const FieldInput = styled(Field)`
    background: none;
    border-bottom: 1.5px solid #275556 ;
    margin-top: 1%;
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
    margin-top: 12%;
    color:#275556;
    font-size: 14px;
`

export const DIVLogin = styled.div`
    margin-top: 20px;

    button {
        height: 40px;
    }

    .IMGLogin {
        -webkit-box-reflect: below 5px
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
    gap: 10%;
`
export const ServiceImg = styled.img`
    width:40%;   
`
export const InfoServices = styled.div`
    width: 40%;
    overflow-y: hidden;
    
    .box {
        box-shadow: 0px 15px 17px -15px rgba(39,85,86,0.36);
        display: flex;
        align-items: center;
        gap:20px;
        padding: 20px;
        border-radius: 20px;
        transform: translateX(-100%);
        transition:transform 0.8s ease;
    }

    .box.show {
        transform: translateX(0);
    }
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

export const IconCard = styled.img`
    width:20%;    
`
export const TitleCard = styled.p`
    font-weight:600;    
`
export const CardTxt = styled.p`
    font-size: 12px;
`

// ---------------Modal--Primera--vez---------------------------
export const ModalPrimeraVez = styled(Modal)`
    .modal-dialog {
        margin: 4% 16% 0 !important;
    }

    .modal-content {
        width: 70vw !important;
        height: 70vh;
        border-radius: 50px;

        .Section {
            background-color: #FFFFFF;
            border-radius: 50px;
        }
    }

    .ConteImgH2 {
        height: 85%;

        .ConteH2 {
            height: 10vh;
        }
        h2 {
            margin: auto 0;
            text-align: center;
            font-weight: 700;
            color: #F26052;
            font-size: 24px;
            width: 70%;
        }
        .BGIMG1 {
            background-color: #F9C86E;
            height: 70%;
            border-radius: 48px 48px 0 0;
        }
        .BGIMG2 {
            background-color: #4DA796;
            height: 70%;
            border-radius: 48px 48px 0 0;
        }
        .BGIMG3 {
            background-color: #F26052;
            height: 70%;
            border-radius: 48px 48px 0 0;
        }
    }

    .css-26w9jf-MuiMobileStepper-dot {
        background-color: #7A7A7A !important;
    }

    .BTNNext {
        background-color: #4DA796;
        color: #FFFFFF;
        width: 20% !important;
        margin: 0 auto;

        &:hover {
            background-color: #4DA796;
        }
    }
    
    .BTNOmitir {
        color: #80808064;

        &:hover {
            color: grey;
        }
    }
`

// --------------------------------------Home -----------------------
export const HomeStyle = styled.div`

    
    
    //--------------------IMG principal
    .IMGHome {
        height: 100vh;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://res.cloudinary.com/doaijv8m0/image/upload/v1657732952/Demoday/Image_kopayq.png");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .IMGHome section {
        width: 50%;
    }
    .IMGHome h2 {
        color: #FFFFFF;
        font-size: 50px;
        font-weight: 700;
    }
    .IMGHome p {
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 300;
        line-height: 19px;
    }
    .IMGHome h3 {
        color: #FFFFFF;
        font-size: 20px;
    }
    .IMGHome img {
        width: 10px;
        height: 15px;
    }

    //--------------------Consejos y Tips home
    .TICShome {
        margin-bottom: 3em !important;
    }
    .TICShome .h2 {
        margin: 0 auto;
        text-align: center;
        color: #4DA796;
        font-size: 36px;
    }
    .TICShome h4 {
        margin: 0 auto;
        width: 73%;
        text-align: center;
        color: #426666; 
        font-size: 16px;
    }
    .TICShome h3 {
        margin-top: 28px;
        font-size: 18px;
        font-weight: 600;
        color: #F26052;
        text-align: center;
    }
    .TICShome section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
        color: #000000;
        width: 95%;
    }
    .Tips{
        border-radius: 20px;
        width: 100%;
    }
    .Tips div {
        margin: 1em 0;
    }
    .Tips p {
        margin: 10px 15px 0 0;
    }
    .BGTips1 {
        background-color: #A4DBD1;
    }
    .BGTips2 {
        background-color: #F39991;
    }
    .BGTips3 {
        background-color: #F6DD61;
    }
    .TICShome img {
        width: 80px;
        height: 80px;
    }
    .TICShome .h2-2 {
        font-size: 20px;
    }
    .TICShome p {
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
    }

    //--------------------Equipo tecnico home
    .EquipoTec h2 {
        margin: 0 auto;
        text-align: center;
        color: #F26052;
        font-size: 36px;
    }
    .EquipoTec h4 {
        margin: 0 auto;
        width: 75%;
        text-align: center;
        color: #426666; 
        font-size: 16px;
    }
    .EquipoTec div {
        width: 15rem;
        height: 20rem;
    }
    .BORDERimg {
        border-radius: 50%;
        box-sizing: border-box;
        border: 11px solid #FFFFFF;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .EquipoTec img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    .EquipoTec h3 {
        margin-top: 8px;
        font-size: 16px;
        color: #275556;
        text-align: center;
    }

    //---------------------------------Carrusel Home
    .UserAndPets {
        margin: 0 2em;
        height: 60vh;
        img {
            border-radius: 14px;
        }
        .div1 {
            width: 70%;
            height: 100%;
            margin: 0 auto;
            div {
                width: 80%;
                height: 80%;
                margin: 0 auto;
            }
            section {
                gap: 15px;
            }
            img {
                width: 150px;
            }
        }
        .div2 {
            height: 80%;
            div{
                width: 100%;
                height: 100%;
            } 

            img {
                width: 60%;
                height: 100%;

            }
        }
    }
    .UserAndPets h2{
        font-size: 30px;
        color: #4BA695;
        width: 60%;
        font-weight: 600;

    }
    .UserAndPets span{
        color: #F26052;
        font-size: 14px;
        font-weight: 600;
    }
    .UserAndPets p{
        color: #426666;
        font-size: 16px;
        line-height: 28px;
        width: 80%;
        margin-bottom: auto; 
    }
`

// REQUISITOS ******
export const DivUnoRe = styled.div`
    justify-content: center ;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const DivServiceAnimal = styled.div`
    width: 80%;
    height:80vh;
    background: url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1657748565/Tyzy/Perros_gu%C3%ADa_hzcn0s.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 30px;
    box-shadow: 5px 5px 7px -3px rgba(131,131,131,0.77);
`

export const BtnRequisitosUno = styled.button`
    border:1.6px solid #F26052;
    color: #F26052;
    font-weight: 600;
    width: 80%;
    padding: 15px;
    margin-top: 2%;
    border-radius: 10px;
`

export const Div2Requisitos = styled.div`
    display: flex;
    gap:10%;
    width: 80%;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
`

export const Article2Req = styled.article`
    width: 45% ;
    justify-self:center ;
`

export const ImgRequisitos2 = styled.div`
    width: 45%;
    height:50vh;
    background: url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1657748695/Tyzy/Perros_gu%C3%ADa_1_uieh8h.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 30px;
    box-shadow: 5px 5px 7px -3px rgba(131,131,131,0.77);
`

export const BtnRequisitosDos = styled.button`
    border:1.6px solid #F26052;
    color: #F26052;
    font-weight: 600;
    width: 90%;
    padding: 15px;
    margin-top: 2%;
    border-radius: 10px;
`

export const NewsletterDiv = styled.div`
    width:80%;
    margin:0 auto;
    text-align: center;
    margin-top: 15%;
    margin-bottom: 15%;
`

export const NewsletterText = styled.p`
    font-weight:700;
    font-size:20px; 
    color:  #275556;
`

export const NewsletterPrg = styled.p`
    font-size:16px ;
    color:#426666;
    width:80%;
    margin:0 auto;
    margin-top: 8px;
`

export const FormNewsletter = styled.form`
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
`

export const InputNewsletter = styled.input`
    border:1.5px solid #275556;
    width: 60%;
    padding: 4px;
    border-right: none;
    &::placeholder{
        font-size: 12px;
    }
    &:focus{
        outline: none;
    }
`
export const BtnNewsletter = styled.button`
    background-color: #F26052;
    color:white;
    padding: 6px;
    width: 15%;
    font-weight: 500;
    font-size: 16px;
`