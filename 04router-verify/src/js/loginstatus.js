
// 登录相关的状态和函数
const fakeAuth = {
    isLogin: false, //登录状态
    signin(cb){
        fakeAuth.isLogin = true; //登录成功
        cb();
    },
    signout(cb){
        fakeAuth.isLogin = false; //退出登录
        cb();
    }
}

export default fakeAuth;
