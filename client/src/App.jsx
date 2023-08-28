import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import "./App.css";

import HomePage from "./pages/HomePage";
// import JournalEntryCreator from "./pages/JournalEntryCreator";
// import JournalEntryUpdater from "./pages/JournalEntryUpdater";
// import ErrorPage from "./pages/ErrorPage";

import Header from "./components/Header";


//TODO: additional routes:
// <Route path="/search/:tag" element={<HomePage />} />
// <Route path="/create" element={<JournalEntryCreator />} />
// <Route path="/update" element={<JournalEntryUpdater />} />
// <Route path="*" element={<ErrorPage />} />

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />} />
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