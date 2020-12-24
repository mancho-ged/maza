import TopNavbar from "./components/navbar/navbar";
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import PartnerCompanies from './components/partner-companies';
import CompletedUnits from './components/completed-units';
import Footer from './components/footer';
import TypicalAppartments from "./components/typical-appartments";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Section1 />
      <Section2 />
      <TypicalAppartments />
      <Section3 />
      <PartnerCompanies />
      <CompletedUnits />
      <Footer />
    </div>
  );
}

export default App;
