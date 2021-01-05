import { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import IndexPage from "../pages/IndexPage";
import NewsPage from "../pages/NewsPage";


class MyRouter extends Component {
    render() {
        return(
            <div className="one">
                <Router>

                    <Switch>
                        <Route path="/" exact component={IndexPage}></Route>
                        <Route path="/news" component={NewsPage}></Route>
                    </Switch>

                </Router>

            </div>
        );
    }
}

export default MyRouter;