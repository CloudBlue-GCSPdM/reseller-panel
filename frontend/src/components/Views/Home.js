import CryptoJS from 'crypto-js'
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom';

import Title from '../Title';
import Grid from '../Tiles/Grid';
import Layout from '../Layout';
import SubTitle from '../SubTitle';
import Center from '../Center';
import Loading from '../Loading';


const Home = ({props}) => {

  const [vendors, setVendors] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading_products, setLoaderProducts] = useState(true)
  const [loading_vendors, setLoaderVendors] = useState(true)
  const [tmdata, setTmData] = useState({})
  const [selectedVendor, setSelectedVendor] = useState("")
  const [selectedProduct, setSelectedProduct] = useState("")

  //fetch data here
  useEffect(()=>{

    //set up the data calls.
    axios.get("/vendorList").then(res => {
     setVendors(res.data.vendors)
     setLoaderVendors(false)
    })
  
    axios.get("/productList").then(res => {
      setProducts(res.data.products)
      setLoaderProducts(false)
    })
  
    //maybe move to home component
    //get_trend_data()
  
  }, [])

  const navigate = useNavigate()
  
  const handleVendorClick = (vendorName) => {
    // setSelectedVendor(prevState => vendorName)
    console.log("vendorName without useState", vendorName)
    navigate(`/Charts/${vendorName}`, {state: {value:"aqui"}})
    //do the navigate here instead.
    // setRedirect(true)
    //maybe add redirect as state here too
  }

  const handleProductClick = (productName) => {
    //do the navigate here instead.
    setSelectedProduct(productName)
    
  }

  //state
  // this.state = {
  //   load_products: true,
  //   load_vendors: true,
  //   redirect: false,
  //   tileClicked: null,
  //   vendors: [],
  //   products: [],
  //   selectedVendor: "",
  //   tmResponse: {},
  // }

  //maybe move to MainChart.js as a dependency
    const get_trend_data =()=>{

      const finalUrl = 'https://cspi-stg.trendmicro.com/LMPI/v2/customers'
      
      var curDate = new Date().toGMTString();
      var now = new Date();
      var secondsSinceEpoch = Math.round(now.getTime() / 1000);
      
      var targetUrl = finalUrl.replace(new RegExp('^https?://[^/]+/'),'/'); // strip hostname
      var method = 'GET';
      
      var md5Hash = CryptoJS.MD5({});
      var base64 = CryptoJS.enc.Base64.stringify(md5Hash);
      var Payload = secondsSinceEpoch + method + targetUrl;
      
      var hash = CryptoJS.HmacSHA256(Payload, "oOZOtGyzd9ctgqeKBo3VBCIaWA6oZDoYlAm5jNAEUVU=");
      var base64hash = CryptoJS.enc.Base64.stringify(hash);
      
      const signature = base64hash;
      const posix = secondsSinceEpoch;
      
      
      axios.get(finalUrl, {
        headers: {
            'x-traceid' : 'TRACE1587333638',
            'x-access-token' : '1b42dbdf-b94d-456e-8cc2-22df5d3daf6f',
            'x-signature' : signature,
            'x-posix-time' : posix,
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        params: {
          'user_modified_start' : '2013-01-01T00:00:00Z',
          'user_modified_end' : '2020-04-30T00:00:00Z'
        }
      }).then(res=> {
        console.log("after axios", res)
        setTmData(res.data)
        })
      
      console.log("i finished fetching", tmdata)
    }

    const jsx_load_product=()=>{
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
    
    const jsx_loaded_all_products=()=>{
      return <div>
    <Center props={{"subtitle": "List of products:", "loading": loading_products}}/>
    <Layout props={{"products":products}}/>
      </div>
    }
    
    const jsx_loaded_vendors=()=>{
    
      return <div>
            <SubTitle props={{"subtitle":"List of vendors:"}}></SubTitle>
            <Grid props={{ "vendors": [...vendors], "select":handleVendorClick}} />
      </div>
    }

    // if (redirect) {
    //   return <Navigate to={{
    //     pathname: `/charts/${selectedVendor}`,
    //     state: { vendor: selectedVendor }
    //   }} />
    // }

  return <div>

    <Title props={{ 'title': 'Welcome to the landing page', 'subtitle': `Vendors you work with: ${vendors}.` }} />
    {/* outer div */}
    <div style={{ paddingLeft: 25, paddingRight: 25 }}>

    {loading_products ? jsx_load_product() : jsx_loaded_all_products()}
    {loading_vendors ? <br /> : jsx_loaded_vendors()}  
        
      </div>

  </div>;
};

export default Home;

