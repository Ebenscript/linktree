import LandingPage from "./pages/landing-page/landing-page";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/linktree" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
