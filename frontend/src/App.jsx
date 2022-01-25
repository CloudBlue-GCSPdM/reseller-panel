import React, { useEffect, useState } from "react"; 


//components
import Navbar from './components/Navbar';
import BarChart from "./components/Charts/BarChart";
import ScatterChart from "./components/Charts/ScatterChart";
import DoughnutChart from "./components/Charts/DoughnutChart";
import LineChart from "./components/Charts/LineChart";
import Title from "./components/Title";

//router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//css
import 'bulma/css/bulma.min.css'



const App = () => {
  const [message, setMessage] = useState("");


const getWelcomeMessage = async () => {
  const requestOptions = {
    method: "GET",
    headers : {
      'Media-Type': 'application/json',
     },
  };

// for some reason, api returning Content-type: text, workaround with Json parse.
const response = await fetch("/apitest", requestOptions);
const data = JSON.parse(await response.text())


console.log({data})
  if (!response.ok) {
    console.log("something went wrong")
  } else {
    console.log({ data })
    setMessage(JSON.stringify(data.vendors))  
  }


};

useEffect (()=>{
  getWelcomeMessage();
}, [])

  return (
    <div>

      <Title props={{"title": "Welcome to the landing page", "subtitle": `Vendors you work with:, ${message}`}}/>

      <BarChart/>
      <DoughnutChart/>
      <LineChart/>

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
