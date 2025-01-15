import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import DefaultLayout from "./layouts/DefaultLayout";
import MovieShowPage from "./pages/MovieShowPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* Route per la pagina principale con layout di default */}
        <Route path="/" element={<DefaultLayout />}>
          {/* Route per la home page */}
          <Route index element={<HomePage />} />
          {/* Route per la pagina di dettaglio */}
          <Route path="detail" element={<DetailPage />} />
          <Route path="movies/:id" element={<MovieShowPage />} />
        </Route>
        {/* 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
