import { useContext } from "react";
import { Login } from "../../Pages/Login";
import { AuthContext } from "./AuthContext";

export function RequireAuth({children}: {children: JSX.Element}) {

    const auth = useContext(AuthContext)

    if(!auth.user) {
        return <Login />;
    }

    return children;
}