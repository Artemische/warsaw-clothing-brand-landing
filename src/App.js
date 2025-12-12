import "./App.css";
import Header from "./components/Header/Header.js";
import Banner from "./components/Banner/Banner.js";
import Examples from "./components/Examples/Examples.js";
import Corousel from "./components/Corousel/Corousel.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
      <div className="App">
        <Header />
        <Banner />
        <Examples />
        <Corousel />
        <Footer />
      </div>
  );
}

export default App;
