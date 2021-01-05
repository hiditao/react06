import {useParams} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function CheckLogin() {
    let {userId} = useParams();
    return(
        <div>
            {/* 条件渲染组件 */}
            {userId === "login" ? <Login /> : <Register />}
        </div>
    );
}