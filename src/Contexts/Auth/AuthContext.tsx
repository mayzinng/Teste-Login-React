import { createContext } from "react";
import { User } from "../../types/User";


export type AuthContextType = {
    user: User | null;
    signin: (email:string, password:string) =>  Promise<boolean> //promis epois será feita requisição;
    signout: () => void; //se quer fazer logout, não precisa retornar nada no front-end
}

export const AuthContext = createContext<AuthContextType>(null!);