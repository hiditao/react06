import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";
import About from "../component/About";
import Home from "../component/Home";
import User from "../component/User";

function App() {
    return (
        <Router> 
            {/* 父路由 */}
            <ul>
                <li>
                    <Link to="/">主页面</Link>
                </li>
                <li>
                    <Link to="/about">关于我们</Link>
                </li>
                <li>
                    <Link to="/user">个人中心</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/user">
                    <User />
                </Route>
            </Switch>
        </Router>
    );
}


export default App;