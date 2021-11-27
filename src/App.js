import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Spinner from "./components/spinner/Spinner";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <section className="main-container">
        <Sidebar setLoading={setLoading} />
        <Spinner loading={loading} />
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
