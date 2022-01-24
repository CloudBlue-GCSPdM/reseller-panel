import React, { createContext, useState } from "react";

export const connectContext = createContext();

export const connectProvider = (props) => {
    const [vari, setVar] = useState(localStorage.getItem("id"));
}
