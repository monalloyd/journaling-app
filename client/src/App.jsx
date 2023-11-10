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
import UpdateEntryPage from "./pages/UpdateEntryPage/UpdateEntryPage";
import ReadEntryPage from "./pages/ReadEntryPage";
import ConfirmDeletePage from "./pages/ConfirmDeletePage/ConfirmDeletePage";

import Sidebar from "./layouts/Sidebar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Sidebar />} >
      <Route index element={<HomePage />} />
      <Route path="new" element={<NewEntryPage />} />
      <Route path="update/:id" element={<UpdateEntryPage />} />
      <Route path="entry/:id" element={<ReadEntryPage />} />
      <Route path="entry/delete/:id" element={<ConfirmDeletePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;