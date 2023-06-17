import React, {useState} from 'react';
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
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Logout from "./pages/Logout";
import Login from "./pages/Login";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ "/" } element={<RootLayout/>}>
            <Route index element={ <Products/> }/>
            <Route path={"products"} element={ <Products/> }/>
            <Route path={"products"}>
                <Route path={":id"} element={<ProductDetail/>}/>
            </Route>
            <Route path={"profile"}>
                <Route path={""} element={<Profile username="ben" introduction="1" email="1" />}/>
            </Route>
            <Route path={"cart"}>
                <Route path={""} element={<Cart/>}/>
            </Route>
            <Route path={"login"}>
                <Route path={""} element={<Login/>}/>
            </Route>
            <Route path={"logout"}>
                <Route path={""} element={<Logout/>}/>
            </Route>

            <Route path={ "about" } element={ <About/> }/>

            <Route path={"*"} element={<h1>404</h1>}/>
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={ router } />
    );
}

export default App;
