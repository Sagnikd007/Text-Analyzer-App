import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils2" about="About TextUtils" />
      <div className="container" my-3>
      <TextForm heading="Enter text to analyze below"/>
      </div>
    </>
  );
}

export default App;
