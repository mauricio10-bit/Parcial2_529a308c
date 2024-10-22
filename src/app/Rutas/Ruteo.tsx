import { Route, Routes } from "react-router-dom";
import { Inicio } from "../Componentes/Inicio";
import { AdministrarRevistas } from "../Revistas/AdministrarRevistas";
import { ListarRevistas } from "../Revistas/ListarRevistas";
import { RegistrarRevistas } from "../Revistas/RegistrarRevistas";
import { Acerca } from "../Otros/Acerca";
import { NoEncontrado } from "../Otros/NoEncontrado";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element={< Inicio />} />

            <Route path="/regrev" element={< RegistrarRevistas />} />
            <Route path="/adminrev" element={< AdministrarRevistas />} />
            <Route path="/lisrev" element={< ListarRevistas />} />

            <Route path="/acer" element={< Acerca />} />

            <Route path="*" element={< NoEncontrado />} />

        </Routes>
    )
}