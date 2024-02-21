import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Approuter from "./Approuter";
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Approuter />
      </Router>
    </>
  );
}

export default App;
