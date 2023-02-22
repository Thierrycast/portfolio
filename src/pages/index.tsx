import { HomeContainer } from '../styles/home'
import Header from '../components/header'
import FirstSection from '../components/firstSection'
import About from '../components/about'
import Technologies from '../components/technologies'
import Projects from '../components/projects' 
import Contacts from '../components/contact'
import Footer from '../components/footer'


export default function Home() {
  return (
    <HomeContainer>
      <Header/>
      <FirstSection/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contacts/>
      <Footer/>
      
    </HomeContainer>
  
  )
}
