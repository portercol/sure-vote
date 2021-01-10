import { Route } from 'react-router-dom';
import { useGlobalContextAuthUser } from "./GlobalContextAuthUser";
import { Redirect } from "react-router-dom";

export const PrivateRoute = ({ children, ...rest }) => {
    const userId = useGlobalContextAuthUser();
    return (
        <Route {...rest} render={() => {
            return userId !== null
                ? children
                : <Redirect to='/signin' />
        }} />
    )
}