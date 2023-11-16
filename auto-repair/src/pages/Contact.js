import '../App.css';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Form from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Contact() {
  const page = {title:"Contact", location:"/contact"}

  return (
    <div className="App">
      <TopBar></TopBar>
      <NavBar></NavBar>
      <Header page={page}></Header>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}