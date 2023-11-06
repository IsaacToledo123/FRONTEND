import Nav from "./components/Nav";

import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Reservas from "./components/Reservas";
import Registro from "./components/Registro";
import CabañaInfo from "./components/CabñaInfo";
import LadingPage from "./components/LadingPage";
import AdminVista from "./components/AdminComponents/components/AdminVista";
import NavAdmin from "./components/AdminComponents/components/NavAdmin";
import IngresosView from "./components/AdminComponents/components/PaginaIngresos";
// import Menu from "./components/AdminComponents/components/Menu";
import GraficosSeccionados from "./components/AdminComponents/components/PaginaGraficas";
import EgresosView from "./components/AdminComponents/components/PaginaEgresos";
import ReservasView from "./components/AdminComponents/components/PaginaReservas";

// import ReservasOption from './components/AdminComponents/components/ReservasOpcion'
import Menu from './components/AdminComponents/components/Menu'
function App() {
  return (
    <BrowserRouter>
      {/* <Nav></Nav> */}
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LadingPage />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/cabañasInfo" element={<CabañaInfo />} />
          
        </Route>
        <Route path="/admin" element={<NavAdmin />}>
          <Route path="MenuPrincipal" element={<AdminVista />} />
          <Route path="paginaEgresos" element={<EgresosView />} />
          <Route path="Graficas" element={<GraficosSeccionados />} />
          <Route path="paginaIngresos" element={<IngresosView />} />
          <Route path="Reservas" element={<ReservasView />} />
          {/* <Route path="Menu" element={<Menu />} /> */}
        </Route>
      </Routes>
      {/* <Registro></Registro> */}
    </BrowserRouter>
  );
}

export default App;
