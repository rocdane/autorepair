import '../App.css';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import About from '../components/About';
import Fact from '../components/Fact';
import Partner from '../components/Partner';
import Footer from '../components/Footer';

export default function AboutUs() {
  const page = {title:"About us", location:"/about"}

  return (
    <div className="App">
      <TopBar></TopBar>
      <NavBar></NavBar>
      <Header page={page}></Header>
      <About></About>
      <Fact></Fact>
      <Partner></Partner>
      <Footer></Footer>
    </div>
  );
}