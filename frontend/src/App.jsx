import React, { useEffect, useState } from "react"; 

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


  if (!response.ok) {
    console.log("something went wrong")
  } else {
    console.log({ data })
    setMessage(JSON.stringify(data.test.sample))  
  }


};

useEffect (()=>{
  getWelcomeMessage();
}, [])

  return (
    <div>
      <h1> homepage here: {message} </h1>
    </div>
  );
};

export default App;
