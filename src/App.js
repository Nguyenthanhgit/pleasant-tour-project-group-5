import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// Pages
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Packages from './Pages/Packages';
import Contact from './Pages/Contact';
import Destination from './Pages/Destination';
import Team from './Pages/Team';
import Detail from './Pages/Detail.jsx';
// Destination
import Thailand from './Pages/Thailand';
import England from './Pages/England';
import Malaysia from './Pages/Malaysia';
import Australia from './Pages/Australia';
import Indonesia from './Pages/Indonesia';
import Vietnam from './Pages/Vietnam';
import Cart from './Pages/Cart';
import Pricelist from './Pages/Pricelist.jsx';
import { useState } from 'react';

function App() {

  //add cart
  const [cartItems, setCartItems] = useState([]);
  const handleAdd = (product) => {
    const ProductExits = cartItems.find((item) => item.id === product.id);
    if (ProductExits) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExits, quantity: ProductExits.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alert("Add cart Success");
  };

  const deleteCart = (GFGCourse) => {
    const updatedCart = cartItems.filter((item) => item.id !== GFGCourse.id);
    setCartItems(updatedCart);
    alert("Delete cart success!");
  };

  return (
    <div className="App">
      <BrowserRouter>
      <Header number={cartItems.length} />
        <Routes>
          <Route path="/" element={<Home handleAdd={handleAdd}  />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages handleAdd={handleAdd} />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/team" element={<Team />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/thailand" element={<Thailand />} />
          <Route path="/england" element={<England />} />
          <Route path="/malaysia" element={<Malaysia />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/indonesia" element={<Indonesia />} />
          <Route path="/vietnam" element={<Vietnam />} />
          <Route path="/price" element={<Pricelist />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} deleteCart={deleteCart}  />} />
        </Routes>
        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
