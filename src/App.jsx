import Header from "../components/Header/Header.jsx";
import TakeAppointment from "../components/main-section/take-appointment/TakeAppointment.jsx";
import Services from "../components/main-section/services/Services.jsx";

export default function App() {

  return (
      <>
          <Header/>
          <main>
              <TakeAppointment/>
              <Services/>
          </main>
      </>
  )
}
