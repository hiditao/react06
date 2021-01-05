import { Redirect, Route } from "react-router-dom";

export default function AuthRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} render={props => {
            console.log(props);
            return Boolean(localStorage['username']) ? (<Component {...props} />) : (<Redirect to={{pathname: "/login", state: {from: props.location}}}/>)
        }}/>
    )
}
