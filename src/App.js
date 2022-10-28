import { Cookies } from "./components/cookies/Cookies";
import { Router } from "./components/router/Router";
import './components/css/style.css'
import './components/css/products.css'
import './components/css/home.css'
import './components/css/account-basket.css'


function App() {
  return (
    <>
    <Router/>
    <Cookies></Cookies>
    </>
    
    
  );
}

export default App;
