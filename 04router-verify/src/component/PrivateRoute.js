import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import authContext from "../js/context";

// 自定义路由组件PrivateRoute，封装需要权限的页面，如果没有权限，应该转发（重定向）
// children表示使用PrivateRoute时,内部的子组件ShopingCar
// ...rest表示剩余的参数
export default function PrivateRoute({children, ...rest}) {
    const auth = useContext(authContext); //使用上下文对象
    return(
        // render属性用于渲染一个组件
        <Route {...rest} render={({location})=>{
            return auth.user ? (children) : (
                <Redirect to={{pathname: "/login", state: {from: location}}}/>
            ) ;
        }}></Route>
    )
}