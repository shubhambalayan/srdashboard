import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Settings from "./pages/settings/Settings"
import Storedesign from "./pages/settings/Storedesign";
import ModuleSettings from "./pages/settings/ModuleSettings";

const Dashboard = ({match}) => {
  return (
        <Layout>
            <Routes>
                <Route path="" element={<Homepage/>} />
                <Route path="/settings" element={<Settings/>} />
                <Route path="/storedesign" element={<Storedesign/>} />
                <Route path="/modulesettings" element={<ModuleSettings/>} />
            </Routes>
        </Layout>
  )
}

export default Dashboard