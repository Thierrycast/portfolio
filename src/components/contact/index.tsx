import { Container, Wrap, SendEmail, SocialMedias } from './style'

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

          <input type="text" placeholder='Email'/>
          <textarea style={{resize: "none"}} placeholder='Mensagem' ></textarea>

          <button>enviar</button>

        </SendEmail>
        <SocialMedias>
          <div><img src="/icons/icondiscord2.svg" alt="" /></div>
          <div><img src="/icons/iconwhatsapp2.svg" alt="" /></div>
          <div><img src="/icons/icongithub2.svg" alt="" /></div>
          <div><img src="/icons/iconlinkedin2.svg" alt="" /></div>
        </SocialMedias>
      </Wrap>

    </Container>

  )
}
