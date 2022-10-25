import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Private } from "./Pages/Private";
import './App.css';
import { AuthProvider } from "./Contexts/Auth/AuthProvider";
import { RequireAuth } from "./Contexts/Auth/RequireAuth";

export function App() {

  return (
   <div>
    <header>
      <h1>
        Header do site
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/private">Página privada</Link>
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


