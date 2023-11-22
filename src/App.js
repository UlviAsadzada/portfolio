import { useSelector } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import 'remixicon/fonts/remixicon.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    AOS.init();
  },[])

  const darkMode=useSelector((state)=>state.theme.darkMode)

  return (
  <div className={`py-9 ${darkMode ? "" : "home_dark"}`}>
  <Home/>
  
  </div>
  );
}

export default App;
