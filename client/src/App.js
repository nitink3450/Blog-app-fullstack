import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar1 from "./Components/Navbar/Navbar1";
import Home1 from './pages/Home/Home1';
import Bollywood from './pages/Bollywood1';
import Technology from './pages/Tech1';
import Hollywood from './pages/Hollywood1';
import Fitness from './pages/Fitness1';
import Food from './pages/Food1';
// import Data from './Data'
import Header from './Components/header/Header';
import Footer from './Components/Footer/Footer';
import SinglePage from './pages/SinglePage/SinglePage';
import NotFound from '././pages/NotFound/NotFound'
function App() {
  return (
    <>
      <div className="App">
      {/* <Data>  */}
        <BrowserRouter>
        <Header/>
        <Navbar1 />
          <Routes>
            <Route path='/' element={<Home1/>} />
            <Route path='/Bollywood' element={<Bollywood/>} />
            <Route path='/Technology' element={<Technology/>} />
            <Route path='/Hollywood' element={<Hollywood/>} />
            <Route path='/Fitness' element={<Fitness/>} />
            <Route path='/Food' element={<Food/>} />
            <Route path='/singlepage/:id' exact element={<SinglePage/>} />
            <Route path='*' exact element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      {/* </Data> */}
      </div>
    </>
  );
}

export default App;
