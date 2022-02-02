import React, { Component } from 'react'
import axios from 'axios'
import { Navigate  } from 'react-router-dom';


import Title from '../Title';
import Grid from '../Tiles/Grid';
import Layout from '../Layout';
import SubTitle from '../SubTitle';
import Center from '../Center';
import Loading from '../Loading';


export default class Home extends Component {

constructor(...args){
  super(...args);

  this.state = {
    load_products: true,
    load_vendors: true,
    redirect: false,
    tileClicked: null,
    vendors: [],
    products: [],
    selectedVendor: ""
  }
}

  

  componentDidMount() {
    axios.get("/vendorList").then(res => {
      this.setState({ vendors: res.data.vendors, load_vendors: false })
    })

    axios.get("/productList").then(res => {
      this.setState({products: res.data.products, load_products:false})
    })
}

handleVendorClick = (vendorName) => {
  this.setState({selectedVendor:vendorName, redirect:true})
}

//TODO:
// action function that loads the 


jsx_load_product=()=>{
  return <div style={{ textAlign: 'center', justifyContent: 'center', display: 'block' }}>
     <br />
    <SubTitle props={{"subtitle": "List of products:"}}></SubTitle>
    <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}> 
         <Loading />
            </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>   
  
  </div>
}

jsx_loaded_all_products=()=>{
  return <div>
<Center props={{"subtitle": "List of products:", "loading": this.state.load_products}}/>
<Layout props={{"products":this.state.products}}/>
  </div>
}

jsx_loaded_vendors=()=>{

  return <div>
        <SubTitle props={{"subtitle":"List of vendors:"}}></SubTitle>
        <Grid props={{ "vendors": [...this.props.props.vendors], "select":this.handleVendorClick}} />
  </div>
}

  render() {
    if (this.state.redirect) {
      return <Navigate to={{
        pathname: `/charts/${this.state.selectedVendor}`,
        state: { vendor: this.state.selectedVendor }
      }} />
    }

    console.log({"vendors": this.state.vendors})
    console.log({"products": this.state.products})

    const { vendors } = this.props.props;
    const {load_vendors, load_products} = this.state;
    const loader = this.jsx_load_product()
    const ready = this.jsx_loaded_all_products()
    const load_ven = this.jsx_loaded_vendors()
    return <div>
      <Title props={{ 'title': 'Welcome to the landing page', 'subtitle': `Vendors you work with: ${vendors}.` }} />
      {/* outer div */}
      <div style={{ paddingLeft: 25, paddingRight: 25 }}>

        {load_products ? loader :ready }
        {load_vendors ? <br/> : load_ven }  
        
      </div>

    </div>;
  }
}
