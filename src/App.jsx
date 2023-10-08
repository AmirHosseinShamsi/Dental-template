import Header from "../components/Header/Header.jsx";
import TakeAppointment from "../components/main-section/take-appointment/TakeAppointment.jsx";
import Services from "../components/main-section/services/Services.jsx";
import IntroduceSection from "../components/main-section/introduce-section/IntroduceSection.jsx";
import DentistSection from "../components/main-section/dentist-section/DentistSection.jsx";

export default function App() {

  return (
      <>
          <Header/>
          <main>
              <TakeAppointment/>
              <Services/>
              <IntroduceSection/>
              <DentistSection/>
          </main>
      </>
  )
}
