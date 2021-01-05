import { Component } from "react";


class LoginPage extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            username: "",
            passwd: ""
        }
    }

    changeName(event) {
        this.setState({
            username: event.target.value
        })
    }
    changePwd(event) {
        this.setState({
            passwd: event.target.value
        })
    }

    login() {
        if(this.state.username !== "" && this.state.passwd !== "") {
            alert("登录成功");
            localStorage["username"] = this.state.username;

           this.props.history.goBack();
        } else {
            alert("用户输入不能为空");
        }
    }

    render() {
        return(
            <div>
                <h1>登录页</h1>
                昵称: <input type="text" value={this.state.username} onChange={this.changeName.bind(this)}/> <br /><br />
                密码: <input type="password" value={this.state.passwd} onChange={this.changePwd.bind(this)}/><br /><br />
                <button onClick={this.login.bind(this)}>登录</button>

            </div>
        );
    }
}

export default LoginPage;