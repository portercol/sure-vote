import { Redirect, Route } from 'react-router-dom';
import { useGlobalContextAuthUser } from './GlobalContextAuthUser';

export const PrivateRoute = ({ children, ...rest }) => {
    const userId = useGlobalContextAuthUser();
    console.log("private route userId: ", userId[0].id);
    return (
        <Route {...rest} render={() => {
            return (userId[0].id) !== null
                ? children
                : <Redirect to="/signin" />
        }}
        />
    )
}