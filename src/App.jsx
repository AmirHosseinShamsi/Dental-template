import Header from "../components/Header/Header.jsx";
import TakeAppointment from "../components/main-section/take-appointment/TakeAppointment.jsx";
import Services from "../components/main-section/services/Services.jsx";
import IntroduceSection from "../components/main-section/introduce-section/IntroduceSection.jsx";
import DentistSection from "../components/main-section/dentist-section/DentistSection.jsx";
import Advertisement from "../components/main-section/advertisement/Advertisement.jsx";
import CardCarousel from "../components/main-section/card-carousel/CardCarousel.jsx";
import OurResult from "../components/main-section/our-result/OurResult.jsx";

export default function App() {

  return (
      <>
          <Header/>
          <main>
              <TakeAppointment/>
              <Services/>
              <IntroduceSection/>
              <DentistSection/>
              <Advertisement/>
              <CardCarousel/>
              <OurResult/>
          </main>
      </>
  )
}
