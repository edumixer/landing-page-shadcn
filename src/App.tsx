import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ContactForm } from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Features />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
