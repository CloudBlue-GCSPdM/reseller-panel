import React, { useEffect, useState } from "react"; 

const App = () => {
  const [message, setMessage] = useState("");


const getWelcomeMessage = () => {
  const requestOptions = {
    method: "GET",
    headers : {
      'Media-Type': 'application/json',
     },
  };

fetch("/apitest").then(response=> response.text()).then(data=>console.log(data)) 

  };

useEffect (()=>{
  getWelcomeMessage();
}, [])

  return (
    <div>
      <h1> homepage here </h1>
    </div>
  );
};

export default App;
