import "./register.css";

export default function Register() {
  return (
    <>
      <div className="container">
        <form action="" className="register-form">
          <h1>Register</h1>
          <div className="register-form-items">
            <div className="register-form-input">
              <label>Nombre Completo</label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className="register-form-input">
              <label>Correo Electronico</label>
              <input type="text" placeholder="example@gmail.com" />
            </div>

            <div className="register-form-input">
              <label>Contraseña</label>
              <input type="password" placeholder="Contraseña" />
            </div>

            <div className="register-form-input">
              <label>Confirmar Contraseña</label>
              <input type="password" placeholder="Confirmar Contraseña" />
            </div>

            <button className="login-form-button">Iniciar Sesion</button>
          </div>
        </form>
      </div>
    </>
  );
}
