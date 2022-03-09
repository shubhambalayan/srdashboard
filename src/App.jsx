import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Onbording from "./pages/Auth/Onbording";
import Dashboard from "./Dashboard";

import Homepage from "./pages/Homepage";
import Settings from "./pages/settings/Settings"
import Storedesign from "./pages/settings/Storedesign";
import ModuleSettings from "./pages/settings/ModuleSettings";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/onboarding" element={<Onbording/>} />

            <Route exact path="/" element={<Dashboard/>}>
              <Route path="" element={<Homepage/>} />
              <Route path="settings" element={<Settings/>} />
              <Route path="storedesign" element={<Storedesign/>} />
              <Route path="modulesettings" element={<ModuleSettings/>} />
            </Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
