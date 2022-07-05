import { Navigate } from "./components/router/Navigate";
import { Router } from "./components/router/Router";
import './components/style.css'
import logo from "./components/img/creamerlogo.png";


function App() {
  return (
    <>
    <div className="">
    <img src={logo} alt="logo" width="150rem" className="logo"/>
    </div>

    <Router></Router>
     
    </>
    
  );
}

export default App;
