import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";

import Home from "../component/Home";
import About from "../component/About";
import User from "../component/User";

function App() {
    return (
        // 必须有一个路由容器Router，来包裹路由导航Link以及路由组件Route
        <Router> 
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

            {/* Switch用来匹配唯一的一个组件 */}
            <Switch>
                {/* 每一个路由地址前面都有/，加上exact表示精确匹配，当且仅当地址为/时才匹配这个组件 */}
                {/* Route中的path属性与Link中的to属性是一一对应关系 */}
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