import { Component } from "react";
import { Link } from "react-router-dom";

class IndexPage extends Component {
    render() {
        console.log("index---", this.props.history);

        return (
            <div className="index">
                <h1>主页</h1>
                <ul>
                    <li>
                        <Link to="/">主页</Link>
                    </li>
                    <li>
                        <Link to="/user">个人中心</Link>
                    </li>
                    <li>
                        <Link to="/goodsdetail">商品详情</Link>
                    </li>

                </ul>
            </div>
        )
    }
}

export default IndexPage;