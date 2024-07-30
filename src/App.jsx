import CTA from "./components/CTA"
import Navbar from "./components/Navbar"
import Nosotros from "./components/Nosotros"
import Servicios from "./components/Servicios"
import Proyectos from "./components/Proyectos"
import Testimonios from "./components/Testimonios"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"

export const App = () => {

  return (
    <>
      <CTA></CTA>
      <Navbar></Navbar>
      <Nosotros></Nosotros>
      <Servicios></Servicios>
      <Proyectos></Proyectos>
      <Testimonios></Testimonios>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  )
}
