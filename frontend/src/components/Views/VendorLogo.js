import React from 'react';

//import pictures
import Sophos from "../../pics/sophos.png"
import McAfee from "../../pics/McAfee.png"
import TrendMicro from "../../pics/TrendMicro.jpg"
import BitDefender from "../../pics/Bitdefender.png"
import Mimecast from "../../pics/mimeast.png"


//routing
import { useParams } from 'react-router-dom';


const VendorLogo = () => {
    const vendors = {
        "Sophos" : Sophos,
        "McAfee" : McAfee,
        "TrendMicro" : TrendMicro,
        "BitDefender" : BitDefender,
        "Mimecast" : Mimecast
    }

    let {vendor} = useParams()

  return <div className='container' style={{textAlign:'center', justifyContent:'center', display:'flex'}} >
      <figure className="image" >
          <img src={vendors[`${vendor}`]} style={{width:350}} />
      </figure>
      
  </div>;
};

export default VendorLogo;
