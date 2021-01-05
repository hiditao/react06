import { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import IndexPage from "../pages/IndexPage";
import UserPage from "../pages/UserPage";
import GoodsDetail from "../pages/GoodsDetail";


class MyRouter extends Component {
    render() {
        return(
            <div className="one">
                <Router>

                    <Switch>
                        <Route path="/user" component={UserPage}></Route>
                        <Route path="/goodsdetail" component={GoodsDetail}></Route>
                        <Route path="/" component={IndexPage}></Route>                        
                    </Switch>

                </Router>

            </div>
        );
    }
}

export default MyRouter;