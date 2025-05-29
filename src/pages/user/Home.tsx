import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import AboutDentaClinic from '@/components/home/AboutDentalClinic'
import DentalHomeIntro from '@/components/home/DentalHomeIntro'
import DentalServicesCarousel from '@/components/home/ServiceCarousel'

const Home = () => {
  return (
    <div>
      <Header/>
      <DentalHomeIntro/>
      <AboutDentaClinic/>
      <DentalServicesCarousel/>
      <Footer/>
    </div>
  )
}

export default Home
