import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = (props) => {
  const { children } = props;
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/logreg', {withCredentials: true})
        .then(res => {
            setLoggedInStatus(res.data.loggedInStatus);
            setLoaded(true)
        })
        .catch(err => console.error(err));
}, []);

  return (
    <>
    {
      loaded &&
      (loggedInStatus ? children : <Navigate to={"/logreg"} />)
    }
    </>
    
  )
}

export default PrivateRoute