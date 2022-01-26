import React, { useEffect, useState } from "react";


//components
import Navbar from './components/Navbar/Navbar';
import BarChart from "./components/Charts/BarChart";
import ScatterChart from "./components/Charts/ScatterChart";
import DoughnutChart from "./components/Charts/DoughnutChart";
import LineChart from "./components/Charts/LineChart";
import Title from "./components/Title";
import Grid from "./components/Tiles/Grid"

//router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//css
import 'bulma/css/bulma.min.css'



const App = () => {
  const [message, setMessage] = useState([]);
  let dataprops = {
    "vendors" : []
  }

  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        'Media-Type': 'application/json',
      },
    };

    // for some reason, api returning Content-type: text, workaround with Json parse.
    const response = await fetch("/apitest", requestOptions);
    const data = JSON.parse(await response.text())
    
    if (!response.ok) {
      console.log("something went wrong")
    } else {
      dataprops["vendors"] = data.vendors
      setMessage(data.vendors)
    }

  };

  useEffect(() => {
    getWelcomeMessage();
  }, [])

  return (
    <div>
      <Router>
        <Navbar/>
      </Router>

      <Title props={{ 'title': 'Welcome to the landing page', 'subtitle': `Vendors you work with: ${message}` }} />
      <Grid props={{"vendors": [...message]}} />

      <BarChart />
      <DoughnutChart />
      <LineChart />

      {/* <ScatterChart/> */}


      {/* <Routes>
        <Route path='/' element={}></Route>

      </Routes> */}

      {/* <Router>
        <Navbar />
        <Routes>
          <Route path='/'></Route>
        </Routes>
      </Router> */}


    </div>
  );
};

export default App;
