import Dashboard from '../../components/dashboard/Dashboard';
import './account.css'
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

function Account(){

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
          navigate("/Account");
        } else {
          navigate("/login"); 
        }
      }, [navigate]);

    return(
<div className="mainAC">

     

<Dashboard></Dashboard>
</div>


    );

}

export default Account;