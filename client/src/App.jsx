import React from "react";
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';

import "./App.css";
import "./assets/fonts/scriptina-pro/ScriptinaPro.otf";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import NewEntryPage from "./pages/NewEntryPage";

import Sidebar from "./layouts/Sidebar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Sidebar />} >
      <Route index element={<HomePage />} />
      <Route path="new" element={<NewEntryPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;