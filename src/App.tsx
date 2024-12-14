import "./App.css";
import { ContactForm } from "./components/Contact";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { TaskOrganizer } from "./components/Organize";
import { ToDoList } from "./components/ToDoList";

function App() {
  return (
    <>
      <Navbar />
      <TaskOrganizer />
      <ToDoList />
      <Features />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
