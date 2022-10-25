import { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth/AuthContext";

export function Private() {

    const auth = useContext(AuthContext);

    return(
        <div>
            <h2>Página privada</h2>

            <h3>Olá {auth.user?.name}, tudo bem?</h3>
        </div>
    );
}