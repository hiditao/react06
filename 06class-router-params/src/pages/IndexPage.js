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
                        {/* 路由传参方式1: 直接在url地址后面添加参数即可
                        需要在path中声明参数 url/:params1/:params2 */}
                        <Link to="/news/detail/1/详情1">新闻页面---传参方式1</Link>
                    </li>

                    {/* 路由传参方式2:通过事件函数,将参数添加到props.history保存 */}
                    {/* <li onClick={()=>{
                        this.props.history.push({
                            pathname: "/news",
                            search: "?id=100&title=小明",
                            query: {
                                id: 100,
                                title: "小明"
                            }
                        })
                    }}> 新闻详情1---传参方式2</li> */}

                    {/* 路由传参方式3: 通过props将参数以字符串键值对("?k=v&k=v")的方式保存在history中, */}
                    <li onClick={()=> {
                        this.props.history.push("/news?id=111&title=react")
                    }}>新闻详情2---传参方式3</li>
                </ul>
            </div>
        )
    }
}

export default IndexPage;