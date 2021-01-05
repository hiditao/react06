import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";
import Child from "../component/Child";

function App() {
    return (
        <Router> 
            <ul>
                <li>
                    <Link to="/home">主页面</Link>
                </li>
                <li>
                    <Link to="/about">关于我们</Link>
                </li>
                <li>
                    <Link to="/user">个人中心</Link>
                </li>
            </ul>
            <Switch>
                {/* 使用children表示使用子组件 */}
                {/* 在子组件内部接收参数id */}
                <Route path="/:id" children={<Child />}></Route>
            </Switch>
        </Router>
    );
}


export default App;