import { Redirect, Route } from 'react-router-dom';
import { useGlobalContextAuthUser } from './GlobalContextAuthUser';

export const PrivateRoute = ({ children, ...rest }) => {
    const userId = useGlobalContextAuthUser();
    console.log("private route userId: ", userId);
    return (
        <Route {...rest}> render={() => {
            return userId !== null
                ? children : <Redirect to="/signin" />
        }}
        </Route>
    )
}