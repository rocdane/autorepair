import '../App.css';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Service from '../components/Service';
import Team from '../components/Team';

export default function OurService() {
  const page = {title:"Service", location:"/service"}

  return (
    <div className="App">
      <TopBar></TopBar>
      <NavBar></NavBar>
      <Header page={page}></Header>
      <Service></Service>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}