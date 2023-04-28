
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
 
function App() {
  return (
   <>
   <Router>
   <Navbar/>   
   <Routes>
     <Route path='/' element={<MainPage/>}/>          
   </Routes>
   <Footer/>
   </Router>   
   </> 
  );
}

export default App;
