import Cookies from "js-cookie";

export const token = () => {
    const tokenValue = Cookies.get("jwtToken"); 
// const tokenValue = localStorage.getItem("jwtToken")
    console.log("Token value:", tokenValue); // Log the token value
    return tokenValue;
  };