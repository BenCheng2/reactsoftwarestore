import React, {useLayoutEffect} from 'react'
import {NavLink, Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
        <div className={"root-layout"}>
            <header>
                <nav>
                    <Navbar/>
                </nav>
            </header>

            <main >
                <div style={{marginTop:'100px'}}>
                    <Outlet/>
                </div>
            </main>
        </div>
    )
}
export default RootLayout
