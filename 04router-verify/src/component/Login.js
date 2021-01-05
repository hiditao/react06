import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import authContext from "../js/context";

// 登录组件
export default function Login() {
    // 使用react-router-dom中的hook函数获取相关的变量
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: '/' } }

    const auth = useContext(authContext); //使用上下文对象
    console.log(auth);

    function login() { //登录
        auth.signin(() => {
            history.replace(from);
        });
    }

    return (
        <div>
            <p>你从哪儿来 {from.pathname}</p>
            <button onClick={login}>login in</button>
        </div>
    );
}