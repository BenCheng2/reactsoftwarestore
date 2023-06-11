import React from 'react';
import {
    createBrowserRouter,
    BrowserRouter,
    Routes,
    Route,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Homepage from "./pages/homepage";
import RootLayout from "./layouts/RootLayout";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ "/" } element={<RootLayout/>}>
            <Route index element={ <Homepage/> }/>
            <Route path="about" element={ <About/> }/>
            <Route path={"career"} element={<CareersLayout/>}>
                <Route path={":id"} element={}
            </Route>

            <Route path={"*"} element={<h1>404</h1>}/>
        </Route>
    )
);

function App() {
    // @ts-ignore
    return (
        <RouterProvider router={ router }/>
    );
}

export default App;
