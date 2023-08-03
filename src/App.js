import Header from "./components/Header/Header";
import SearchNav from "./components/SearchNav/SearchNav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Homepage from "./Pages/Homepage";
import Footer from "./components/Footer/Footer";


function App() {

    return <BrowserRouter>
        <div className={"app"}>
            <Header/>
            <div className={"container"}>
                <SearchNav/>

                <Routes>
                    <Route path={"/"} element={<Homepage/>}/>
                    <Route path={"/singleProduct/:id"} element={<SingleProduct/>}/>
                </Routes>
            </div>

            <Footer/>
        </div>
    </BrowserRouter>
}

export default App;
