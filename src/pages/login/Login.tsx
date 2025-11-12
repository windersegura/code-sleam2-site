import './login.css'

export default function Login () {

    return (
        <>
            <div className='container'>
                <form action="" className="login-form">
                    <div className="login-form-items">
                        <h1>Login</h1>
                        <label>Correo Electronico</label>
                        <input className='login-form-input' type="text" placeholder="Correo Electronico"/>

                        <label>Contraseña</label>
                        <input className='login-form-input' type="password" placeholder="Contraseña" />

                        <button className='login-form-button'>Iniciar Sesion</button>
                    </div>
                </form>
            </div>
        </>
    )
}

