import React from "react";
import { useNavigate } from "react-router-dom";
import { ingresarCorreoContrasenha } from "../firebaseConfi";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"

const loginStyleButton ={
  textDecoration: "none",
  color: "white",
  
  }



function Login() {
  const navigate = useNavigate(); //para navegar
  const loginUser = (e) => {
    e.preventDefault();
    const inputsEmail = document.getElementById("correo").value;
    const inputsPassword = document.getElementById("contraseña").value;
    console.log(inputsEmail, inputsPassword);

    ingresarCorreoContrasenha(inputsEmail, inputsPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user.uid);
        sessionStorage.setItem("myid", user.uid);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  
  return (
    <section className="conteiner">
      <div className="conteiner-login">
        <div className="logo">
          <img id="logo-login" src={logo} alt="imagenLogo" text></img>
          <h3 className="text-login">Let's get to write</h3>
        </div>
        <form className="login">
          <input type="email" placeholder="Email" id="correo"></input>
          <br></br>
          <input type="password" placeholder="Password" id="contraseña"></input>
          <a href="#" className="paragraph1">Forgot Password?</a>
          <button onClick={loginUser} className="login-button">
            <Link to="/home" style={loginStyleButton}> Login</Link>
          </button>
          {/* <p className="paragraph2">or create account using social media</p>
          <button className="google-button">Log in with Google</button> */}
          <p className="paragraph2">
            Don't have account?
            <a href="signup" className="navSignup">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
export default Login;

