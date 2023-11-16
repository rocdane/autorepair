import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Barner from './components/Barner';
import About from './components/About';
import Service from './components/Service';
import Fact from './components/Fact';
import Team from './components/Team';
import Partner from './components/Partner';
import Footer from './components/Footer';
import Top from './components/Top';
import Loader from './components/Loader';

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
      <Partner></Partner>
      <Top></Top>
      <Footer></Footer>
    </div>
  );
}

export default App;
