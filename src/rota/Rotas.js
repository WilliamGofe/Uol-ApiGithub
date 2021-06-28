import React from "react";
import { Route, Switch, BrowserRouter} from "react-router-dom";
import AllInfoUser from "../pages/home/AllInfoUser";
import LoginPage from "../pages/login/LoginPage";
import Starred from "../pages/starred/Starred";
import Repos_url from "../pages/repositorio/Repos_url";
import ErrorPage from '../pages/errorpage/ErrorPage'

function Router() {

  return (

          <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage  />
        </Route>

        <Route exact path="/home/users/:username">
          <AllInfoUser   />
        </Route>

        <Route exact path="/users/:username/repos">
          <Repos_url   />
        </Route>

        <Route exact path="/users/:username/starred">
          <Starred  />
          
        </Route>

        <Route exact path="/users/:username/starred">
          <Starred  />
          
        </Route>

        <Route>
          <ErrorPage />
          
        </Route>


      </Switch>
    </BrowserRouter>
   

  );
}

export default Router;
