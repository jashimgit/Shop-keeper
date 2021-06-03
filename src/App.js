import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/pages/ProductDetails";
import Navbar from "./components/pages/Navbar";
import ProductsList from "./components/pages/ProductsList";
import Login from "./components/auth/Login";
import { ProvideAuth } from "./components/auth/Auth";
import PrivateRoute from "./components/auth/PrivateRoute";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            
            <PrivateRoute path="/product-details/:productId">
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
            <Route  path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
      </ProvideAuth>
   
  );
}

export default App;
