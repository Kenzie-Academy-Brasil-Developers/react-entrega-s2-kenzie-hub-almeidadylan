import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min"
import { DashBord } from "../Pages/DashBord/dashbord";
import { Login } from "../Pages/Login/login";
import { Register } from "../Pages/Register/register";
export function Routes () {
    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/signup">
                <Register/>
            </Route>
            <Route exact path="/dashbord">
                <DashBord/>
            </Route>
        </Switch>
    )
}