import React, {useLayoutEffect} from 'react'
import {NavLink, Outlet} from "react-router-dom";
import Bar from "../components/Bar";

const RootLayout = () => {
    return (
        <div className={"root-layout"}>
            <header>
                <nav>
                    <Bar/>
                </nav>
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    )
}
export default RootLayout
