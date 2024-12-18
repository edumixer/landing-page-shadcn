import "./App.css";
import { CardRotate } from "./components/CardRotate";
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

      {/* Card Rotacionado */}
      <CardRotate />

      <ToDoList />
      <Features />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
