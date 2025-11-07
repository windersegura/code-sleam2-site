import './login.css'

export default function Login () {

    return (
        <>
            <main>
                <form action="" className="login-form">
                    <div className="login-form-items">
                        <h1>Login</h1>
                        <label>Correo Electronico</label>
                        <input type="text" placeholder="Correo Electronico"/>

                        <label>Contraseña</label>
                        <input type="text" placeholder="Contraseña" />

                        <button>Iniciar Sesion</button>
                    </div>
                </form>
            </main>
        </>
    )
}

