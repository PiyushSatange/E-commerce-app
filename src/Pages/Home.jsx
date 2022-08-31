import React from "react"
import { Announcement } from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Category from "../Components/Category";
import Products from "../Components/Products";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";


const Home = () => {
    return(
        <div className="container">
            <Navbar/>
            <Announcement/>
            <Slider/>
            <Category/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
};
export default Home;