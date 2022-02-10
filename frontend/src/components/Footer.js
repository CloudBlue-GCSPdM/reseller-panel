import React from 'react';


//#9eeaf7
// #00b0d9
// #02035f
//footer colors

const Footer = () => {
  return <div>

      <div className="main-footer ">
        <div className='secondary-footer'> 
        </div>
        <div className='third-footer'> 
          <p className="col-sm centered-stuff" style={{color: "white", textAlign: "center", padding: 10}}>
              &copy;{new Date().getFullYear()} CloudBlue PdM | All rights reserved
          </p>
        </div>
      </div>
  
  </div>;
};

export default Footer;
