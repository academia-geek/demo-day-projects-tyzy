import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { IoMdPaw } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { listaComuniAsync } from '../../redux/actions/ActionAddComuni'
import { CarouselText, ComunidadDiv, ComunidadPub, DescripUser, ImgCarousel, ImgCarousel1, ImgCarousel2, ImgCarousel3, ImgPubComunidad, LocationPub, PubDescription, SpanTitleComunidad, TitleComunidad, UserImgPub, UserNamePub, UserPub } from '../../styles/StylesGlobals'

export default function ComunidadList() {

  const dispatch = useDispatch()
  const { comunidad } = useSelector(store => store.comunidades)
  console.log(comunidad);

  useEffect(() => {
    dispatch(listaComuniAsync())
  }, [dispatch])

  return (
    <div>
      <Carousel>
      <Carousel.Item interval={1000}>
        <ImgCarousel1/>

        <Carousel.Caption>
          <CarouselText>Comparte tus momentos Tyzy favoritos con nosotros</CarouselText>
         
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={500}>
        <ImgCarousel2/>

        <Carousel.Caption>
          <CarouselText>Muestranos tu lado más genuino</CarouselText>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <ImgCarousel3/>

        <Carousel.Caption>
          <CarouselText>Dejanos saber esos momentos inolvidables</CarouselText>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <TitleComunidad><IoMdPaw style={{'fontSize':'32px', 'marginRight':'20px'}}/>Momentos<SpanTitleComunidad>Tyzy</SpanTitleComunidad></TitleComunidad>
      <ComunidadDiv>
      {
        comunidad?.map((p, idx) => (
          <ComunidadPub key={idx}>
              <UserPub>
                <UserImgPub src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1658714919/Tyzy/WhatsApp_Image_2022-06-01_at_11.56.50_AM_eaazbn.jpg' alt='perfilFoto'/>
                <div>
                <UserNamePub>Jenny Epitia</UserNamePub>
                <LocationPub>{p.direccion}</LocationPub>
                </div>
              </UserPub>
            <ImgPubComunidad src={p.imagen} alt={idx} />
            <DescripUser>Jenny Espitia<PubDescription>{p.descripcion}</PubDescription></DescripUser>
            </ComunidadPub> 
        ))
      }
      </ComunidadDiv>

    </div>
  )
}
