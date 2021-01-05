import React, {useParams} from "react-router-dom";

export default function Child() {
    // useParams是react-routeer-dom自定义的hook，用于获取参数信息
    let {id} =  useParams();

    console.log(useParams());
    return(
        <h1>
            {id}
        </h1>
    );
}