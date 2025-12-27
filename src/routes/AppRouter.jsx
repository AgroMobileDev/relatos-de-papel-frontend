import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import LandingPage from "../pages/LandingPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/*rutas con layout*/}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<h1>HomePage</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
