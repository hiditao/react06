import { Component } from "react";
import localParam from "../js/utils";

class NewsPage extends Component {
    render() {

        console.log("news=====", this.props);
        return(
            <div className="news">
                <h2>新闻页面</h2>
                {/* 路由传参方式1: 参数被保存在this.props.match.params */}
                <h2>{this.props.match.params.id}--{this.props.match.params.title}</h2>

                {/* 路由传参方式2: 通过this.props.history.location.query获取参数,获取参数成功后刷新页面会报错 */}
                {/* <h2>{this.props.history.location.query.id}</h2> */}
           
                {/* 路由传参方式3: 通过自定义函数接收参数,自定义函数解析了url地址后的参数 */}
                <h2>{localParam(this.props.location.search).search.id}</h2>
            </div>
        )
    }
}

export default NewsPage;