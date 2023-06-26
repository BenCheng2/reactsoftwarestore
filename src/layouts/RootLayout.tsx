import React, {useLayoutEffect} from 'react'
import {NavLink, Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
        <div className={"root-layout"} style={{ background: '#aacbef', width: '100%', minHeight: '2000px'}}>
            <header>
                <nav>
                    <Navbar/>
                </nav>
            </header>

            <main >
                <div style={{paddingTop:'100px', minHeight: '100%'}}>
                    <Outlet/>
                </div>
            </main>
        </div>
    )
}
export default RootLayout
