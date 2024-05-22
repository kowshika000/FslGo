// import React, { useState, useEffect } from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { LoginRequest } from '../../Redux/Actions/LoginAction';

// const Login = () => {
//   const { id, token } = useParams(); // Get id and token from URL params
//   const dispatch = useDispatch();
//   const [authenticated, setAuthenticated] = useState(false);
//   const [tokenReceived, setTokenReceived] = useState(false);
//   const LoginData = useSelector((state) => state.Login);
//   const jwtToken = LoginData?.booking?.Token;

//   useEffect(() => {
//     const sUsername = id; // Assuming id is the username
//     const spassword = token; // Assuming token is the password
//     dispatch(LoginRequest({ sUsername, spassword }));
//   }, [id, token, dispatch]);

//   useEffect(() => {
//     if (jwtToken) {
//       localStorage.setItem('token', jwtToken);
//       setAuthenticated(true);
//       setTokenReceived(true);
//     }
//   }, [jwtToken]);

//   if (!tokenReceived) {
//     return <p>Loading...</p>;
//   }

//   if (!authenticated) {
//     return <p>Login failed. Please try again.</p>;
//   }

//   return <Navigate to="/dashboard" />;
// };

// export default Login;
