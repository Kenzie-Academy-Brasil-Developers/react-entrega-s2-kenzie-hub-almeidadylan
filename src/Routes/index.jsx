import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { DashBord } from "../Pages/DashBord/dashbord";
import { Login } from "../Pages/Login/login";
import { Signup } from "../Pages/Register/register";
import { useState, useEffect } from "react";

export function Routes() {
  const [authenticated, setAuthenticated] = useState(false);
  const [ bancoDeDados, setBancoDeDados] = useState([]);
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token")) || "";
    if (!!token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/signup">
        <Signup authenticated={authenticated} bancoDeDados={bancoDeDados} />
      </Route>
      <Route exact path="/user">
        <DashBord
          setAuthenticated={setAuthenticated}
          techs={techs}
          setTechs={setTechs}
          authenticated={authenticated}
          bancoDeDados={bancoDeDados}
          setBancoDeDados={setBancoDeDados}
        />
      </Route>
    </Switch>
  );
}
