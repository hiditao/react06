import { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Introduce from "../component/Introduce";
import Size from "../component/Size";
import Sale from "../component/Sale";
import Commont from "../component/Commont";


class GoodsDetail extends Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <h2>商品详情页</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/introduce`}>商品介绍</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/size`}>规格与包装</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/sale`}>售后保障</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/commont`}>商品评价</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path={`${this.props.match.url}/`}>
                        <Introduce/>
                    </Route>
                    <Route path={`${this.props.match.url}/introduce`}>
                        <Introduce/>
                    </Route>
                    <Route path={`${this.props.match.url}/size`}>
                        <Size/>
                    </Route>
                    <Route path={`${this.props.match.url}/sale`}>
                        <Sale/>
                    </Route>
                    <Route path={`${this.props.match.url}/commont`}>
                        <Commont/>
                    </Route>
                </Switch>
                
            </div>
        );
    }
}

export default GoodsDetail;