
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useActionData,
  useAsyncValue,
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
        <Router>
            <Navbar/>

              <LoadingBar
                color='#f11946'
                progress={progress}
                
              />

              <Routes>
               <Route exact path="/" element={<News setprogress={setprogress} apikey={apikey}  key="home" home="home" pagesize={pagesize} category="general" country="in"/>}/> 
               <Route exact path="/business" element={<News setprogress={setprogress} apikey={apikey} key="business" pagesize={pagesize} category="business" country="in"/>}/> 
               <Route exact path="/entertainment" element={<News setprogress={setprogress} apikey={apikey} key="entertainment" pagesize={pagesize} category="entertainment" country="in"/>}/> 
               <Route exact path="/general" element={<News setprogress={setprogress} apikey={apikey} key="general" pagesize={pagesize} category="general" country="in"/>}/> 
               <Route exact path="/health" element={<News setprogress={setprogress} apikey={apikey} key="health" pagesize={pagesize} category="health" country="in"/>}/> 
               <Route exact path="/science" element={<News setprogress={setprogress} apikey={apikey} key="science" pagesize={pagesize} category="science" country="in"/>}/> 
               <Route exact path="/sports" element={<News setprogress={setprogress} apikey={apikey} key="sports" pagesize={pagesize} category="sports" country="in"/>}/> 
               <Route exact path="/technology" element={<News setprogress={setprogress} apikey={apikey} key="technology" pagesize={pagesize} category="technology" country="in"/>}/> 
               
                {/* <News setprogress={setprogress}/> */}



              </Routes>
        </Router>
      </div>
    )

}

export default App;