import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import { ProvideAuth } from "./components/auth/Auth";
import Login from "./components/auth/Login";
// import PrivateRoute from "./components/auth/PrivateRoute";
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import NotFound from "./components/pages/NotFound";
import ProductDetails from "./components/pages/ProductDetails";
import ProductsList from "./components/pages/ProductsList";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/product/:productId">
              <ProductDetails />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/products">
              <ProductsList />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
