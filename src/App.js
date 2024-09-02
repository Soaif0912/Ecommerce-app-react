import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';

//Component import 
import Header from './Components/Header';
import Footer from './Components/Footer';

// Page import 
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Error from './Pages/Error';

import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from './style/GlobalStyle';

const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgba(29,29,29,0.8)",
    white: "#fff",
    black: "#212529",
    helper: "#8490ff",
    bg: "#F6F8FA",
    footer_bg: "0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
            <GlobalStyle />
            <Header />
              <Routes>
                  <Route path="/" element={<Home/>} > </Route>
                  <Route path="/About" element={<About/>} > </Route>
                  <Route path="/Product/" element={<Products/>} > </Route>
                  <Route path="/ProductDetails/:id" element={<ProductDetails/>}> </Route>
                  <Route path="/Cart" element={<Cart/>} > </Route>
                  <Route path="/Contact" element={<Contact/>} > </Route>
                  <Route path="*" element={<Error/>} > </Route>
                </Routes>   
              <Footer />   

        </BrowserRouter>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
