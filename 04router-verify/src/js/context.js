

// React.createContext() 实现多层组件传值
// 使用方式：
// 1. 在父组件上创建一个context，或者建立一个文件来管理context
// 2. 在父组件上：通过Provider来包裹子组件，使用value={}携带参数
// 3. 在子组件上：useContext()

import React from "react";

// 创建一个上下文对象
const authContext = React.createContext();

export default authContext;
