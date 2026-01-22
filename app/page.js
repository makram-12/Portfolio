"use client"
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Services from "./component/Services";
import Work from "./component/Work";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  // useEffect(() => {
  //   // Scroll to top on page load/refresh
  //   window.scrollTo(0, 0);
  //   // Remove any hash from URL
  //   if (window.location.hash) {
  //     window.history.replaceState(null, null, ' ');
  //   }
  // }, []);

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true);
    }else{
      setIsDarkMode(false);
    }
  },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode}/>
      <About isDarkMode={isDarkMode}/>
      <Services isDarkMode={isDarkMode}/>
      <Work isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
