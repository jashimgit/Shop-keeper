import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/pages/ProductDetails";
import Navbar from "./components/pages/Navbar";
import ProductsList from "./components/pages/ProductsList";
import Login from "./components/auth/Login";
import { ProvideAuth } from "./components/auth/Auth";
import PrivateRoute from "./components/auth/PrivateRoute";

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            
            <PrivateRoute path="/product-details/:id">
              <ProductDetails />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/products">
              <ProductsList />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      </ProvideAuth>
   
  );
}

export default App;
