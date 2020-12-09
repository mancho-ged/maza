import 'bootstrap/dist/css/bootstrap.min.css'
import TopNavbar from "./components/navbar/navbar";
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
