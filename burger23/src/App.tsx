import "bootstrap/dist/css/bootstrap.min.css";
import { BurgerProvider } from "./contexts/BurgerContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  BurgersPage,
  BurgersAdminPage,
  DeleteBurgersPage,
} from "./pages";
import MainNavigation from "./components/shared/MainNavigation";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <MainNavigation />

          <main>
            <BurgerProvider>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="burgers" element={<BurgersPage />}></Route>
                <Route
                  path="burger-admin"
                  element={<BurgersAdminPage />}
                ></Route>
                <Route
                  path="delete-burger"
                  element={<DeleteBurgersPage />}
                ></Route>
              </Routes>
            </BurgerProvider>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
