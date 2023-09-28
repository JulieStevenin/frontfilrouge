import FormLogin from "../../components/formLogin/FormLogin";
import "./login.css";

function Login() {
  return (
    <>
      <div className="mainLogin">
        <div className="textLogin">
          <h2 className="titleLogin">Partagez toute la culture </h2>
          <p className="subLogin">
            Connectez-vous et échangez avec la communauté
          </p>
        </div>
        <FormLogin></FormLogin>
      </div>
    </>
  );
}

export default Login;
