import { Mic, Search } from "@material-ui/icons";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <img
          src="https://ipubuzz.com/wp-content/uploads/2021/03/google2.0.0.jpg"
          alt="logo"
          className="Logo"
        />
        <div className="Box">
          <i className="Search">
            <Search color="disabled" />
          </i>
          <i className="Mic">
            <Mic color="primary" />
          </i>
          <input className="InputStyle" type="text" />
        </div>
        <div className="buttons">
          <button>Google Search</button>
          <button>I'm feeling lucky</button>
        </div>
        <div className="Links">
          Google is offered in: <a href="/">हिन्दी</a>
          <a href="/">বাংলা</a>
          <a href="/">తెలుగు</a>
          <a href="/">मराठी</a>
          <a href="/">தமிழ்</a>
          <a href="/">ગુજરાતી</a>
          <a href="/">ಕನ್ನಡ</a>
          <a href="/">മലയാളം</a>
          <a href="/">ਪੰਜਾਬੀ</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
