import { Component } from "react";
import { Link } from "react-router-dom";

class IndexPage extends Component {
    render() {
        return (
            <div className="index">
                <h1>主页</h1>
                <ul>
                    <li>
                        <Link to="/">主页</Link>
                    </li>
                    <li>
                        <Link to="/news">新闻页面</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default IndexPage;