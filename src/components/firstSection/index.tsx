import {ContainerSection, FirstSectionAside, SocialMedias, DevIcon} from './style'
import IconWhatsApp from '../../assets/iconwhatsapp.svg'

export default function Home() {
    return (
     
      <ContainerSection id='s-home' >

        <FirstSectionAside>
          <p>Olá, eu sou</p>
          <h1>{'Thierry Castro'}</h1>
          <h2>DESENVOLVEDOR FULL-STACK</h2>
          <SocialMedias>

          <img src="/icons/iconlinkedin.svg" alt="" />
          <img src="/icons/icongithub.svg" alt="" />
          <img src="/icons/iconwhatsapp.svg" alt="" />

          </SocialMedias>
          <button>Curriculo</button>

        </FirstSectionAside>
        <DevIcon className="devicon" >
         <img src="/icons/Programming-amico.svg" alt="" /> 
        </DevIcon>

      </ContainerSection>

    )
  }
  