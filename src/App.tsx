import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Private } from "./Pages/Private";
import './App.css';
import { RequireAuth } from "./Contexts/Auth/RequireAuth";
import { useContext } from "react";
import { AuthContext } from "./Contexts/Auth/AuthContext";

export function App() {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/');
    window.location.href = window.location.href;
  }

  return (
   <div>
    <header>
      <h1>
        Header do site
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/private">Página privada</Link>
        {auth.user && <button type="submit" onClick={handleLogout}>Sair</button>}
      </nav>
    </header>
    <hr/>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/private" element={<RequireAuth><Private /></RequireAuth>}/>
    </Routes>
   </div>
  )
}


