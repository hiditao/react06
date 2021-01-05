import useProviderAuth from "../hook/useProviderAuth";
import authContext from "../js/context";

// 使用上下文对象context的父组件,放在页面的最外层
//参数{children}表示组件内部所有的子组件
export default function ProviderAuth({children}) {
    // 使用自定义hook获取用户的登录状态
    const auth = useProviderAuth();

    return(
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}