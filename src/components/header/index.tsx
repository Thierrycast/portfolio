import { Header, Logo, Menu, MenuHamburguer, ModalMenu } from './style'
import { useState } from 'react'

export default function HeaderComponent() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handleClickLink = () => {
    setOpenMenu(false)
  }

  return (
    <>
      <Header>
        <Logo>
          <p>{"<Thierry"}</p>
          <span>{"Castro/>"}</span>
        </Logo>

        <Menu>
          <li><a href="#s-home">Ínicio</a></li>
          <li><a href="#s-about">Sobre</a></li>
          <li><a href="#s-skills">Conhecimentos</a></li>
          <li><a href="#s-projects">Projetos</a></li>
          <li><a href="#s-contact">Contato</a></li>
        </Menu>

        <input checked={openMenu} onChange={handleOpenMenu} type="checkbox" id="menu-hamburguer" />
        <label htmlFor="menu-hamburguer">
          <MenuHamburguer className='burger-menu'>
            <span className='hamburguer' ></span>
          </MenuHamburguer>
        </label>
      </Header>

      {openMenu && (
        <ModalMenu className='modal-menu'>
          <ul>
            <li><a onClick={handleClickLink} href="#s-home">Ínicio</a></li>
            <li><a onClick={handleClickLink} href="#s-about">Sobre</a></li>
            <li><a onClick={handleClickLink} href="#s-skills">Conhecimentos</a></li>
            <li><a onClick={handleClickLink} href="#s-projects">Projetos</a></li>
            <li><a onClick={handleClickLink} href="#s-contact">Contato</a></li>
          </ul>
        </ModalMenu>
      )}
    </>
  )
}
