import { useState } from "react";
import fakeAuth from "../js/loginstatus";

// 自定义hook: 使用use开头的函数
function useProviderAuth() {
    const [user, setUser] = useState(null);

    // 定义函数
    const signin = cb => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        })
    }
    const signout = cb => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        })
    }

    // 自定义hook返回对象
    return {
        user,
        signin,
        signout
    }
}

export default useProviderAuth;