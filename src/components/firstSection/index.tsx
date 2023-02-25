import { ContainerSection, FirstSectionAside, SocialMedias, DevIcon, ImageComponent } from './style'
import Link from 'next/link'

export default function Home() {
  return (

    <ContainerSection id='s-home' >

      <FirstSectionAside>
        <p>Olá, eu sou</p>
        <h1>{'Thierry Castro'}</h1>
        <h2>DESENVOLVEDOR FULL-STACK</h2>
        <SocialMedias>

          <Link target="_blank" href="https://www.linkedin.com/in/thierry-castro" >
            <div>
              <ImageComponent
                width={100}
                height={100}
                layout="responsive"
                src="/icons/iconlinkedin.svg"
                alt="" />
            </div>
          </Link>
          <Link target="_blank" href="https://github.com/Thierrycast" >
            <div>
              <ImageComponent
                width={100}
                height={100}
                layout="responsive"
                src="/icons/icongithub.svg"
                alt="" />
            </div>
          </Link>

          <Link target="_blank" href="https://wa.me/5533999595927" >
            <div>
              <ImageComponent
                width={100}
                height={100}
                layout="responsive"
                src="/icons/iconwhatsapp.svg"
                alt="" />
            </div>
          </Link>




        </SocialMedias>
        <Link 
        href="https://drive.google.com/file/d/14Mw09hwiVP3aEYknw0oqH7RcCWP7_pl_/view?usp=share_link" className='curriculo-button' 
        target="_blank"
        >
          <button>Curriculo</button>
          
        </Link>
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
