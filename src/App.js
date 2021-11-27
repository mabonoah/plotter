import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Header />
      <section className="main-container">
        <Sidebar />
      </section>
    </div>
  );
}

export default App;
