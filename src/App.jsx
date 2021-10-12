import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import "./App.css";
import { ROUTES } from "./constants/routes";
import Login from "./features/Login/Login";
import Todo from "./features/todo/Todo";
import SignUp from "./features/SignUp/SignUp";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.home} />
          </Route>
          <Route path={ROUTES.home}>
            <Todo />
          </Route>
          <Route path={ROUTES.login}>
            <Login />
          </Route>
          <Route path={ROUTES.signUp}>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
