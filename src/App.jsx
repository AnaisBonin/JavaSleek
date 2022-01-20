import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AppProvider from "./contexts/AppProvider";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Payments from './pages/Payments/Payments';

import './App.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/payement" element={<Payments />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
