import { useContext } from "react"
import { useHistory } from "react-router-dom";
import authContext from "../js/context"

// 提示用户是否登录,如果是登录状态,可退出
export default function AuthButton() {
    const auth = useContext(authContext); //使用上下文对象
    let history = useHistory(); //使用历史记录history

    function logout() { //退出登录
        auth.signout(()=> {
            history.push("/");
        })
    }

    return(
        <div>
            {auth.user ? <p>welcome! <button onClick={logout}>sign out</button></p> : <p>please first sign in</p>}
            
        </div>
    )
}