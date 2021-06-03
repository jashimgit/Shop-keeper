import { useAuth } from "./Auth";
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({children, ...rest}) => {
    const auth = useAuth();
    return (
        <Route
          {...rest}
          render={({ location }) =>
            auth.user ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;