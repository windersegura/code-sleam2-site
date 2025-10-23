import './home.css'

function Home() {
    return (
        <>
            <nav className="nav-menu">
                <div className="">
                    <h1 className="">Code Sleam</h1>
                </div>

                <div className="nav-links">
                    <a href="">Buscar Empleo</a>
                    <a href="">Publicar Empleos</a>
                </div>

                <div className="nav-buttons">
                    <button className='nav-button-login'>Iniciar sesion</button>
                    <button className='nav-button-register'>Registrarse</button>
                </div>

            </nav>
        </>
    )
}


export default Home