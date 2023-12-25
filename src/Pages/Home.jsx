import React, { useEffect, useState} from "react"
import { Announcement } from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Category from "../Components/Category";
import Products from "../Components/Products";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";


const API = "http://localhost:8910/req/get/product/multi/id/9";

const Home = () => {
    
  const [ProductData, setProductData] = useState([]);

  const fetchProduct = async(url) => {
      try{
        const resp = await fetch(url);
        const data = await resp.json();
        if(data.length > 0){
          setProductData(data);
        }
        console.log(data);
      }
      catch(e){
        console.error(e);
      }
  }

  useEffect(()=>{
      fetchProduct(API);
  },[]);
    return(
        <div className="container">
            <Navbar/>
            <Announcement/>
            <Slider/>
            <Category/>
            <Products ProductData={ProductData}/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
};
export default Home;