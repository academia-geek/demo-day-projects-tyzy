import styled from "styled-components";
import { Field, Form } from "formik";
import { Modal } from "react-bootstrap";
import { BsArrowDown } from "react-icons/bs";
import { Avatar } from "flowbite-react";
import { Divider } from "@mui/material";

// REGISTRO //

export const DivRegister = styled.div`
  display: flex;
  background-color: rgba(75, 166, 149, 31%);
`;

export const ImageRegister = styled.div`
  background-color: aqua;
  box-shadow: 10px 10px 17px -7px rgba(39, 85, 86, 0.36);
  height: 100vh;
  width: 50%;
  border-radius: 0px 30px 30px 0px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1657502584/Tyzy/Rectangle_40_ukbl6s.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const LogoTyzy = styled.img`
  width: 10%;
  margin-top: 5%;
  margin-left: 5%;
`;

export const RegisterForm = styled.div`
  height: 80vh;
  width: 30%;
  align-self: center;
  margin: 0 auto;
`;

export const RegisterTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;
  color: #f26052;
`;
export const RegisterText = styled.p`
  font-size: 14px;
  color: #275556;
`;

export const LoginRegister = styled.p`
  font-size: 14px;
  color: #275556;
`;

export const SpanInciar = styled.span`
  color: #f26052;
  font-weight: 600;
`;

export const LabelRegistro = styled.label`
  font-weight: 500;
  color: #275556;
  font-size: 14px;
  margin-top: 4%;
`;

export const FieldInput = styled(Field)`
  background: none;
  border: none;
  border-bottom: 1.5px solid #275556;
  margin-top: 1%;
  &:focus {
    outline: none;
  }
`;

export const BtnRegister = styled.button`
  background-color: #f26052;
  padding: 12px;
  margin-top: 20px;
  border-radius: 50px;
  color: white;
  box-shadow: 10px 10px 17px -7px rgba(39, 85, 86, 0.36);
  font-weight: 500;
`;
export const IngresaCon = styled.h3`
  text-align: center;
  margin-top: 12%;
  color: #275556;
  font-size: 14px;
`

export const DIVLogin = styled.div`
  margin-top: 20px;

  button {
    height: 40px;
  }

  .IMGLogin {
    -webkit-box-reflect: below 5px
      linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  }
`;

// LOGIN //

export const DivLogin = styled.div`
  display: flex;
  background-color: rgba(242, 96, 82, 21%);
`;

export const ImageLogin = styled.div`
  background-color: aqua;
  box-shadow: 10px 10px 17px -7px rgba(39, 85, 86, 0.36);
  height: 100vh;
  width: 50%;
  border-radius: 0px 30px 30px 0px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1657502584/Tyzy/pexels-vlada-karpovich-8359637_cw3hjt.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const LogoTyzy2 = styled.img`
  width: 10%;
  margin-top: 5%;
  margin-left: 5%;
`;

export const LoginForm = styled.div`
  height: 60vh;
  width: 30%;
  align-self: center;
  margin: 0 auto;
`;

export const LoginTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;
  color: #f26052;
`;
export const LoginText = styled.p`
  font-size: 14px;
  color: #275556;
`;

export const SpanInciar2 = styled.span`
  color: #f26052;
  font-weight: 600;
`;

export const LabelInicio = styled.label`
  font-weight: 500;
  color: #275556;
  font-size: 14px;
  margin-top: 18px;
`;

export const FieldInput2 = styled(Field)`
  background: none;
  border: none;
  border-bottom: 1.5px solid #275556;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
`;

export const BtnLogin = styled.button`
  background-color: #f26052;
  padding: 12px;
  margin-top: 20px;
  border-radius: 50px;
  color: white;
  box-shadow: 10px 10px 17px -7px rgba(39, 85, 86, 0.36);
  font-weight: 500;
`;
export const IngresaCon2 = styled.h3`
  text-align: center;
  margin-top: 40px;
  color: #275556;
  font-size: 14px;
`;
/* SERVICES COMPONENT */

export const ServicesDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 10%;
  gap: 10%;
`;
export const ServiceImg = styled.img`
  width: 40%;
`;
export const InfoServices = styled.div`
  width: 40%;
  overflow-y: hidden;

  .box {
    box-shadow: 0px 15px 17px -15px rgba(39, 85, 86, 0.36);
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 20px;
    transform: translateX(-100%);
    transition: transform 0.8s ease;
  }

  .box.show {
    transform: translateX(0);
  }
`;
export const ServiceTitle = styled.p`
  color: #f26052;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  width: 80%;
`;
export const SpanTitle = styled.span`
  color: #4ba695;
  font-weight: 700;
`;

export const IconCard = styled.img`
  width: 20%;
`;
export const TitleCard = styled.p`
  font-weight: 600;
`;
export const CardTxt = styled.p`
  font-size: 12px;
`;

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
      background-color: #ffffff;
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
      color: #f26052;
      font-size: 24px;
      width: 70%;
    }
    .BGIMG1 {
      background-color: #f9c86e;
      height: 70%;
      border-radius: 48px 48px 0 0;
    }
    .BGIMG2 {
      background-color: #4da796;
      height: 70%;
      border-radius: 48px 48px 0 0;
    }
    .BGIMG3 {
      background-color: #f26052;
      height: 70%;
      border-radius: 48px 48px 0 0;
    }
  }

  .css-26w9jf-MuiMobileStepper-dot {
    background-color: #7a7a7a !important;
  }

  .BTNNext {
    background-color: #4da796;
    color: #ffffff;
    width: 20% !important;
    margin: 0 auto;

    &:hover {
      background-color: #4da796;
    }
  }

  .BTNOmitir {
    color: #80808064;

    &:hover {
      color: grey;
    }
  }
`;

// --------------------------------------Home -----------------------
export const HomeStyle = styled.div`
  //--------------------IMG principal
  .IMGHome {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://res.cloudinary.com/doaijv8m0/image/upload/v1657732952/Demoday/Image_kopayq.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .IMGHome section {
    width: 50%;
  }
  .IMGHome h2 {
    color: #ffffff;
    font-size: 50px;
    font-weight: 700;
  }
  .IMGHome p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
  }
  .IMGHome h3 {
    color: #ffffff;
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
    color: #4da796;
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
    color: #f26052;
    text-align: center;
  }
  .TICShome section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    color: #000000;
    width: 95%;
  }
  .Tips {
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
    background-color: #a4dbd1;
  }
  .BGTips2 {
    background-color: #f39991;
  }
  .BGTips3 {
    background-color: #f6dd61;
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
    color: #f26052;
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
    border: 11px solid #ffffff;
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

  //--------------------IMG principal
  .IMGHome {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://res.cloudinary.com/doaijv8m0/image/upload/v1657732952/Demoday/Image_kopayq.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .IMGHome section {
    width: 50%;
  }
  .IMGHome h2 {
    color: #ffffff;
    font-size: 50px;
    font-weight: 700;
  }
  .IMGHome p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
  }
  .IMGHome h3 {
    color: #ffffff;
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
    color: #4da796;
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
    color: #f26052;
    text-align: center;
  }
  .TICShome section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    color: #000000;
    width: 95%;
  }
  .Tips {
    border-radius: 20px;
    width: 100%;
    height: 13rem;
  }
  .Tips div {
    margin: 0.8em 0;
  }
  .Tips p {
    margin: 4px 20px 0 0;
    line-height: 20px !important;
  }
  .BGTips1 {
    background-color: #a4dbd1;
  }
  .BGTips2 {
    background-color: #f39991;
  }
  .BGTips3 {
    background-color: #f6dd61;
  }
  .TICShome img {
    width: 80px;
    height: 80px;
  }
  .TICShome {
    font-size: 20px;
  }
  .h2-2 {
    width: 90%;
    height: 30%;
  }
  .h2-2 h2 {
    font-size: 18px;
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
    color: #f26052;
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
    border: 11px solid #ffffff;
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
      div {
        width: 100%;
        height: 100%;
      }

      img {
        width: 60%;
        height: 100%;
      }
    }
  }
  .UserAndPets h2 {
    font-size: 30px;
    color: #4ba695;
    width: 60%;
    font-weight: 600;
  }
  .UserAndPets span {
    color: #f26052;
    font-size: 14px;
    font-weight: 600;
  }
  .UserAndPets p {
    color: #426666;
    font-size: 16px;
    line-height: 28px;
    width: 80%;
    margin-bottom: auto;
  }
`;

// REQUISITOS ******
export const DivUnoRe = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivServiceAnimal = styled.div`
  width: 80%;
  height: 80vh;
  background: url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1657748565/Tyzy/Perros_gu%C3%ADa_hzcn0s.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  box-shadow: 5px 5px 7px -3px rgba(131, 131, 131, 0.77);
`;

export const BtnRequisitosUno = styled.button`
  border: 1.6px solid #f26052;
  color: #f26052;
  font-weight: 600;
  width: 80%;
  padding: 15px;
  margin-top: 2%;
  border-radius: 10px;
`;

export const Div2Requisitos = styled.div`
  display: flex;
  gap: 10%;
  width: 80%;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
`;

export const Article2Req = styled.article`
  width: 45%;
  justify-self: center;
`;

export const ImgRequisitos2 = styled.div`
  width: 45%;
  height: 50vh;
  background: url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1657748695/Tyzy/Perros_gu%C3%ADa_1_uieh8h.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  box-shadow: 5px 5px 7px -3px rgba(131, 131, 131, 0.77);
`;

export const BtnRequisitosDos = styled.button`
  border: 1.6px solid #f26052;
  color: #f26052;
  font-weight: 600;
  width: 90%;
  padding: 15px;
  margin-top: 2%;
  border-radius: 10px;
`;

export const NewsletterDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-top: 15%;
  margin-bottom: 15%;
`;

export const NewsletterText = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #275556;
`;

export const NewsletterPrg = styled.p`
  font-size: 16px;
  color: #426666;
  width: 80%;
  margin: 0 auto;
  margin-top: 8px;
`;

export const FormNewsletter = styled.form`
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
`;

export const InputNewsletter = styled.input`
  border: 1.5px solid #275556;
  width: 60%;
  padding: 4px;
  border-right: none;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    outline: none;
  }
`;
export const BtnNewsletter = styled.button`
  background-color: #f26052;
  color: white;
  padding: 6px;
  width: 15%;
  font-weight: 500;
  font-size: 16px;
`;

/*  DIAGNÓSTICO */

export const ParallaxDiag = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1658180946/Tyzy/pexels-alex-green-5699482_1_ve5zrg.jpg");
  height: 80vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

export const DiagDiv = styled.div`
  margin-left: 5%;
`;

export const DiagText1 = styled.p`
  font-size: 45px;
  font-weight: 700;
  color: white;
  width: 70%;
  line-height: 50px;
`;

export const DiagSubText1 = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 3px;
  color: white;
  margin-top: 20px;
`;

export const DiagIconArrow = styled(BsArrowDown)`
  color: white;
  margin-top: 20px;
`;

export const DiagText2 = styled.p`
  color: #426666;
  font-size: 14px;
  line-height: 25px;
  margin: 0 auto;
  width: 60%;
  text-align: center;
  margin-top: 2%;
`;

export const DiagForm = styled(Form)`
  color: black;
  padding: 6px;
  width: 70%;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 10%;
`;

export const DiagLabel = styled.label`
  font-size: 14px;
  color: #666666;
`;

export const DiagInput = styled(Field)`
  border: 1px solid hsla(0, 0%, 80%, 1);
  padding: 8px;
  border-radius: 20px;
  margin-top: 10px;
  &::placeholder {
    color: #666666;
    font-size: 12px;
  }
`;
export const DiagDivRadius = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 10px;
`;

export const RadiusFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #666666;
`;

export const InputRadius = styled(Field)`
    border: 1px solid hsla(0, 0%, 80%, 1);
    accent-color: #F26052;
    border-radius: 50%;
`
export const InputRadio = styled.input`
    border: 1px solid hsla(0, 0%, 80%, 1);
    accent-color: #F26052;
    border-radius: 50%;
`

export const TextDiag = styled.textarea`
  border: 1px solid hsla(0, 0%, 80%, 1);
  border-radius: 10px;
  margin-top: 10px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  width: 98%;
  margin: 0 auto;
  margin-top: 5%;
  justify-content: space-between;
`;

export const SaveButton = styled.button`
  background-color: #f26052;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
`;
export const EditButton = styled.button`
  border: dashed 1.8px #f26052;
  color: #f26052;
  padding: 10px;
  border-radius: 8px;
  margin-right: 20px;
`;
export const CancelButton = styled.button`
  border: dashed 1.8px #f26052;
  color: #f26052;
  padding: 10px;
  border-radius: 8px;
`;

// SETTINGS.JSX //

// modal detalle mascotas
export const DetalleMascota = styled(Modal)`
  .modal-content {
    border-radius: 50px !important;
    border: transparent;
    img {
      border-radius: 50px 50px 0px 0px;
      width: 100%;
    }

    .BORDERMODAL {
      border-radius: 50px;
      border: none;
    }
  }
`;

//  -------- COMUNIDA ------

export const TitleComunidad = styled.p`
  font-size: 50px;
  font-family: "Yeseva One", cursive;
  width: 80%;
  margin: 0 auto;
  color: #f26052;
  display: flex;
  margin-top: 5%;
  align-items: center;
`;

export const SpanTitleComunidad = styled.span`
  color: #4ba695;
  margin-left: 12px;
`;

export const ComunidadDiv = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5%;
  margin: 0 auto;
  margin-top: 5%;
  justify-content: center;
`;

export const ComunidadPub = styled.div`
  background-color: white;
  border-radius: 20px;
  /* box-shadow: 6px 7px 8px -4px rgba(0,0,0,0.2); */
  border:1px solid #EBEDF0;
`;
export const UserPub = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  gap: 10px;
  align-items: center;
  padding: 12px;
`;

export const UserImgPub = styled(Avatar)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid #4ba695;
`;
export const UserNamePub = styled.p`
  font-size: 14px;
  font-weight: 700;
  /* font-family: 'Yeseva One', cursive; */
  letter-spacing: 2px;
`;
export const LocationPub = styled.p`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`;
export const ImgPubComunidad = styled.img`
  width: 90%;
  height: 80vh;
  margin:0 auto;
`;

export const DescripUser = styled.p`
  font-size: 14px;
  font-weight: 700;
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const PubDescription = styled.p`
  font-size: 14px;
  margin-left: 10px;
  font-weight: 500;
`;

// ----------

export const NewPubDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 15%;
`;
export const NewPubTitle = styled.p`
  font-size: 35px;
  font-family: "Yeseva One", cursive;
  display: flex;
  justify-content: center;
  color: #f2ba52;
  align-items: center;
`;

export const NewPubForm = styled.form`
  /* border-radius: 20px;
  box-shadow: -4px 7px 8px -4px rgba(0,0,0,0.15);
  background-color: white; */
  width: 100%;
  margin-top:2%;
  margin-bottom: 20%;
`;
export const NewPubLabel = styled.label`
  font-size: 14px;
  display:flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color:white;
  background-color: #4BA695;
  width:20%;
  margin:0 auto;
  margin-top: 5%;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.15);
`;
export const NewPubLabel2 = styled.div`
  display: flex;
  flex-direction: column;
  margin:0 auto;
  width:80%;
  margin-top: 10px;
`;

export const LabelComunidad = styled.label`
font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
color:#404040;`

export const NewPubLocation = styled.input`
  border: 1px solid #cccccc;
  border-radius:20px;
  margin-top:10px;
  &::placeholder{
    font-weight: 300 !important;
  }
  &:focus {
    outline:none;
}
`;
export const NewDescription = styled.textarea`
  font-size: 14px;
  border: 1px solid #cccccc;
  border-radius:20px;
  margin-top:10px;
  &::placeholder{
    font-weight: 300 !important;
  }
  &:focus {
    outline:none;
}
`;

export const BtnDescrition = styled.button`
  background-color: #F26052 ;
  padding: 8px;
  color:white;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.15);
  position: relative;
  float: right;
  margin-right: 10%;
  margin-top: 2%;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:10px;
  width: 12%;
  font-weight: 700;
`
export const ImgCarousel1 = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1658717101/Tyzy/pexels-photo-8734435_sg6fgq.jpg");
  height: 80vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ImgCarousel2 = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1658717184/Tyzy/pexels-anastasia-shuraeva-5126991_1_ixzlsw.jpg");
  height: 80vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ImgCarousel3 = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1658717230/Tyzy/pexels-yaroslav-shuraev-9632391_hru9hf.jpg");
  height: 80vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const CarouselText = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 28px;
  margin-bottom: 25%;
  text-align: center;
  border: 2px solid white;
  padding: 5px;
`;

export const HrDividir = styled(Divider)`
 background-color: black;
 padding: 40% 0 0 0;
 width: 1px;
`
// DIV CALENDAR

export const DivCalendar = styled.div`
  width:70%;
  margin:0 auto;
  border-radius: 20px;
  position: relative;
  bottom:65px;
  background-color:white;
  padding: 10px;
  /* border: 1px solid #CCCCCC; */
  box-shadow: 15px 17px 11px -20px #A3A3A3;
`

export const AgendateCalendario = styled.p`
  color: #F26052;
  font-weight: 600;
  letter-spacing: 3px;
  text-align: center;
  font-size: 16px;
  margin-top: 2%;
`

export const AgendateTxt = styled.p`
  width: 85%;
  font-size: 14px;
  color: #426666;
  margin: 0 auto;
  text-align: center;
  line-height: 25px;
  margin-bottom: 5%;
`