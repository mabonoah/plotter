import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Header />
      <section className="main-container">
        <Sidebar />
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
