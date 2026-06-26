import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Acervo from "../pages/public/Acervo/Acervo";
import Home from "../pages/public/Home/Home";
import Leitor from "../pages/public/Leitor/Leitor";
import NotFound from "../pages/public/NotFound/NotFound";
import Obra from "../pages/public/Obra/Obra";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/acervo" element={<Acervo />} />
          <Route path="/obra/:id" element={<Obra />} />
          <Route path="/leitor/:id" element={<Leitor />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
