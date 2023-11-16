import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Barner from './components/Barner';
import About from './components/About';
import Service from './components/Service';
import Fact from './components/Fact';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <NavBar></NavBar>
      <Barner></Barner>
      <About></About>
      <Service></Service>
      <Fact></Fact>
      <Team></Team>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;
