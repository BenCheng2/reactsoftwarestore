import React from 'react';
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Products from "./pages/Products";
import RootLayout from "./layouts/RootLayout";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ "/" } element={<RootLayout/>}>
            <Route index element={ <Products/> }/>
            <Route path={"products"} element={ <Products/> }/>
            <Route path={"products"}>
                <Route path={":id"} element={<ProductDetail/>}/>
            </Route>

            <Route path="about" element={ <About/> }/>

            <Route path={"*"} element={<h1>404</h1>}/>
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={ router }/>
    );
}

export default App;
