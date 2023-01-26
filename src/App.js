import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Error from "./components/Error/Error";
import Footer from './components/Footer/Footer';
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import NavBar from './components/NavBar/NavBar';
import NewsLetter from "./components/NewsLetter/NewsLetter";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Blogs from "./pages/Blogs/Blogs";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import SignUp from "./pages/SignUp/SignUp";

const ScrollTop2 = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    
  },[pathname])
  return null
}

function App() {

  useEffect(() => {
    AOS.init()
  },[])

  return (
    <BrowserRouter>
    <div className="App">
      <ScrollTop2/>
      <NavBar />
      <MobileNavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/blog/:id" component={Blog}/>
          <Route exact path="/product/:id" component={Product}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/blogs" component={Blogs}/>
          <Route exact path="/shop/:name?" component={Shop}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact component={Error}/>
        </Switch>
        <NewsLetter />
        <ScrollTop/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
