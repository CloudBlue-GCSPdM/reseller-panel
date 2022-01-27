import React, { Component } from "react";


//components
import Navbar from './components/Navbar/Navbar';

//import views
import Home from "./components/Views/Home";
import About from "./components/Views/About";

//router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//css
import 'bulma/css/bulma.min.css'


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
    const response = await fetch("/apitest", requestOptions);
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
      </Router>


      <Home props={{"vendors": [...this.state.vendors]}}/>

      {/* <About/> */}



       {/* <Routes>        <Route path='/' element={}></Route>
       </Routes> */}
        {/* <Router>
         <Navbar />
         <Routes>
           <Route path='/'></Route>
         </Routes>
       </Router> */}

    </div>;
  }
}

