import { ContainerSection, FirstSectionAside, SocialMedias, DevIcon, ImageComponent } from './style'

export default function Home() {
  return (

    <ContainerSection id='s-home' >

      <FirstSectionAside>
        <p>Olá, eu sou</p>
        <h1>{'Thierry Castro'}</h1>
        <h2>DESENVOLVEDOR FULL-STACK</h2>
        <SocialMedias>

          <div>

            <ImageComponent
              width={100}
              height={100}
              layout="responsive"
              src="/icons/iconlinkedin.svg"
              alt="" />
          </div>

          <div>
            <ImageComponent
              width={100}
              height={100}
              layout="responsive"
              src="/icons/icongithub.svg"
              alt="" />
          </div>
          <div>
            <ImageComponent
              width={100}
              height={100}
              layout="responsive"
              src="/icons/iconwhatsapp.svg"
              alt="" />
          </div>




        </SocialMedias>
        <button>Curriculo</button>

      </FirstSectionAside>
      <DevIcon className="devicon" >
        <ImageComponent
          width={100}
          height={100}
          layout="responsive"
          src="/icons/Programming-amico.svg"
          alt="" />
      </DevIcon>

    </ContainerSection>

  )
}
