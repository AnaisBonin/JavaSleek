import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AppProvider from "./contexts/AppProvider";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductPage from './pages/ProductPage/ProductPage';
import Payments from './pages/Payments/Payments';
import Cart from "./pages/Cart/Cart";
import Project from "./pages/Project/Project";
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

import './App.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<ProductPage />} />
          </Route>
          <Route path="/project/:id" element={<Project />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
