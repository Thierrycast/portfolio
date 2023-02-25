import { Container, Wrap, SendEmail, SocialMedias, ImageComponent } from './style'
import Link from 'next/link'

export default function Contacts() {
  return (
    <Container id='s-contact' >
      <h1>Contatos<span>( )</span></h1>
      <Wrap>
        <SendEmail>
          <div className='name' >
            <input type="text" placeholder='Nome' />
            <input type="text" placeholder='Sobrenome' />
          </div>

          <input type="text" placeholder='Email' />
          <textarea style={{ resize: "none" }} placeholder='Mensagem' ></textarea>

          <button  >enviar</button>

        </SendEmail>
        <SocialMedias>
          <Link href="mailto:thierrybarretodecastro@gmail.com" >
            <div>
              <ImageComponent
                width={100}
                height={100}
                layout="responsive"
                src="/icons/iconemail.svg"
                alt="" />
            </div>
          </Link>

          <Link target="_blank" href="https://wa.me/5533999595927" >
            <div>
              <ImageComponent
                width={100}
                height={100}
                layout="responsive"
                src="/icons/iconwhatsapp2.svg"
                alt="" />
            </div>
          </Link>

          <Link target="_blank" href="https://github.com/Thierrycast" >
            <div>
              <ImageComponent
                width={100}
                height={100}
                layout="responsive"
                src="/icons/icongithub2.svg"
                alt="" />
            </div>
          </Link>

          <Link target="_blank" href="https://www.linkedin.com/in/thierry-castro" >
            <div>
              <ImageComponent
                width={100}
                height={100}
                layout="responsive"
                src="/icons/iconlinkedin2.svg"
                alt="" />
            </div>
          </Link>

        </SocialMedias>
      </Wrap>

    </Container>

  )
}
