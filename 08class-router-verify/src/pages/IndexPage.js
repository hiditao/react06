import { Component } from "react";


class IndexPage extends Component {

    exit() {
        localStorage.clear();
        this.props.history.replace("/");
    }

    render() {
        return(
            <div>
                <h1>主页,欢迎回来{}</h1>
                {
                    localStorage['username']
                     ? <h1>欢迎您{localStorage["username"]} <button onClick={this.exit.bind(this)}>退出</button></h1>
                     : <p>请登录</p> 
                }
                
            </div>
        );
    }
}

export default IndexPage;