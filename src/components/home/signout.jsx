import React from "react"
import {RiLogoutBoxRLine} from "react-icons/ri"
import { useNavigate } from "react-router-dom";
import {auth, salirSesion} from "../../firebaseConfi";


const Signout = () =>{
    //const auth = getAuth();
    const navigate=useNavigate();
    const exitSesion =() =>{
      salirSesion().then((e) => {
        console.log(e);
        navigate('/');
        sessionStorage.clear();

    }).catch((error) => {
       console.log (error);
    });

    }
    
    //const exit = limpiar secion localStoragesignout del firebaseConfi

  return (
         <div className="logout" >
            <RiLogoutBoxRLine  className="iconLogout" onClick={exitSesion}/> <span className="botonLogout" onClick={exitSesion}> Logout</span>
         
             
            </div>

    )

  }
export default Signout;