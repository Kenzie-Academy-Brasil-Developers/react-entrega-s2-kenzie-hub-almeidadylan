import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { DashBord } from "../Pages/DashBord/dashbord";
import { Login } from "../Pages/Login/login";
import { Signup } from "../Pages/Register/register";
import { useState, useEffect } from "react";

export function Routes() {
  const [authenticated, setAuthenticated] = useState(false);
  const [BD, setDB] = useState([]);
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
          techs={techs}
          setTechs={setTechs}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          BD={BD}
          setDB={setDB}
        />
      </Route>
      <Route exact path="/signup">
        <Signup authenticated={authenticated} BD={BD} setDB={setDB} />
      </Route>
      <Route exact path="/user">
        <DashBord
          setAuthenticated={setAuthenticated}
          techs={techs}
          setTechs={setTechs}
          authenticated={authenticated}
          BD={BD}
          setDB={setDB}
        />
      </Route>
    </Switch>
  );
}
