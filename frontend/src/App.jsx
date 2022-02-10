import React, { Component } from "react";


//components
import Navbar from './components/Navbar/Navbar';

//import views
import Home from "./components/Views/Home";
import About from "./components/Views/About";
import Contact from "./components/Views/Contact";
import Error from "./components/Views/Error";
import Documentation from "./components/Views/Documentation";
import ChartMain from "./components/Views/ChartMain";
import ChartProduct from "./components/Views/ChartProduct"

//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//css
import 'bulma/css/bulma.min.css'
import './app.css'


export default class App extends Component {


  constructor(props){
    super(props)

    this.state={
      vendors: []
    }
  }
  componentDidMount(){
    this.getVendors()
  }
  getVendors = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        'Media-Type': 'application/json',
      },
    };

    // for some reason, api returning Content-type: text, workaround with Json parse.
    const response = await fetch("/vendorList", requestOptions);
    const data = JSON.parse(await response.text())
    if (!response.ok) {
      console.log("something went wrong SSE")
    } else {
      this.setState({vendors:data.vendors})
    }
  };

  render() {

    return <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home props={{ "vendors": [...this.state.vendors] }} /> }></Route>
          <Route path="/Documentation" element={<Documentation/>}></Route>
          <Route path="/Charts/:vendor"  element={<ChartMain/>}></Route>
          <Route path="/Product/:product" element={<ChartProduct/>}></Route>
          <Route path="/About" element={ <About />}></Route>
          <Route path="/Contact" element={ <Contact />}></Route>
          <Route ></Route>
          <Route path="*" element={ <Error/>} ></Route> 
        </Routes>
      </Router>

    </div>;
  }
}

