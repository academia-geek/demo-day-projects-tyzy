import React from 'react'
import NavBarIn from './NavBarIn'
import { MdOutlinePets } from "react-icons/md";

export default function Requisitos() {
  return (
    <div>
        <NavBarIn/>
        <section className='grid grid-cols-2 gap-10 px-32 my-24 items-center'>
            <div>
            <h3 className='text-titleOrange py-4'>LOREM IPSUM</h3>
            <p className='text-pGreen'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <img src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657512206/Tyzy/Tips_ltmwa1.png' alt=''/>
            </div>
        </section>
        <section className='grid grid-cols-2 gap-10 px-32 my-24 items-center'>
            
            <div>
                <img src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657512206/Tyzy/Tips_ltmwa1.png' alt=''/>
            </div>
            <article>
                <h3 className='text-2xl text-pGreen font-bold '>Animal de servicio</h3>
                <p className='text-xs text-pGreen'>DEFINIDO POR EL TITULO II Y EL TITULO III DE LA ADA</p>
                <p className=' py-6 text-textGray'>Un animal de servicio significa cualquier perro que está entrenado individualmente para realizar un trabajo o realizar tareas en beneficio de una persona con una discapacidad, incluyendo una discapacidad física, mental, sensorial, psiquiátrica, intelectual u otra discapacidad mental. </p>
                <p className='py-2 text-textGray'> <MdOutlinePets className='inline-block text-2xl'/> Un perro guía : Es un perro cuidadosamente entrenado que sirve como una herramienta de viaje para personas que tienen impedimentos visuales graves o que son ciegas</p>
                <p className='py-2 text-textGray'><MdOutlinePets className='inline-block text-2xl'/>  Un perro-oído : Es un perro que ha sido entrenado para alertar a una persona que tiene una pérdida significativa de la audición o es sorda cuando se produce un sonido, como un golpe en la puerta.</p>
                <p className='py-2 text-textGray'><MdOutlinePets className='inline-block text-2xl'/> Perro de servicio psiquiátrico : Es un perro que ha sido entrenado para llevar a cabo tareas que ayudan a las personas con discapacidades a detectar el inicio de episodios psiquiátricos y aminorar sus efectos</p>
                <p className='py-2 text-textGray'><MdOutlinePets className='inline-block text-2xl'/> SSigDOG : Es un perro entrenado para ayudar a una persona con autismo. El perro avisa al manejador cuando este manifiesta movimientos repetitivos distractores comunes entre las personas con autismo, lo que permite a la persona dejar de hacer el movimiento</p>
                <p className='py-2 text-textGray'> <MdOutlinePets className='inline-block text-2xl'/> Perro que Responde a Convulsiones : Es un perro entrenado para ayudar a una persona con un trastorno convulsivo. Cómo el perro le sirve a la persona depende de las necesidades de la persona. El perro puede vigilar a la persona durante una convulsión o el perro puede ir a buscar ayuda.</p>
            </article>
        </section>
    </div>
  )
}
