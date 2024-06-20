
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App =()=> {
   const pagesize=8;
   const apikey=process.env.REACT_APP_NEWS_API

    // state={
    //   progress:0
    // }
    const [progress,setprogress] = useState(0);

    // setprogress= (progress)=>{
    //   setState({progress:progress});
    // }



    return (
      <div>
       
            <Navbar/>

              <LoadingBar
                color='#f11946'
                progress={progress}
                
              />

              <Routes>

              
               <Route exact path="/" element={<News setprogress={setprogress} apikey={apikey}  key="home" home="home" pagesize={pagesize} category="general" country="in"/>}/> 
               <Route  path="/business" element={<News setprogress={setprogress} apikey={apikey} key="business" pagesize={pagesize} category="business" country="in"/>}/> 
               <Route  path="/entertainment" element={<News setprogress={setprogress} apikey={apikey} key="entertainment" pagesize={pagesize} category="entertainment" country="in"/>}/> 
               <Route  path="/general" element={<News setprogress={setprogress} apikey={apikey} key="general" pagesize={pagesize} category="general" country="in"/>}/> 
               <Route  path="/health" element={<News setprogress={setprogress} apikey={apikey} key="health" pagesize={pagesize} category="health" country="in"/>}/> 
               <Route  path="/science" element={<News setprogress={setprogress} apikey={apikey} key="science" pagesize={pagesize} category="science" country="in"/>}/> 
               <Route  path="/sports" element={<News setprogress={setprogress} apikey={apikey} key="sports" pagesize={pagesize} category="sports" country="in"/>}/> 
               <Route  path="/technology" element={<News setprogress={setprogress} apikey={apikey} key="technology" pagesize={pagesize} category="technology" country="in"/>}/> 
               </Routes>
                {/* <News setprogress={setprogress}/> */}



       
      </div>
    )

}

export default App;