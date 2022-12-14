import * as ROUTES from './constants/routers'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Browse, SignIn, ChoseProfile } from './pages'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.BROWSE} element={<Browse />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.CHOSE_PROFILES} element={<ChoseProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
