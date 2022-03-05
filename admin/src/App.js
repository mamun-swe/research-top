import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ScrollToTop from "./components/scrollTop"
import PrivateRoute from "./components/privateRoute"

import Login from "./pages/login"
import Master from "./pages/master"
import FourOFour from "./pages/404"

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/dashboard">
              <Master />
            </PrivateRoute>

            <Route path="*" component={FourOFour} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
