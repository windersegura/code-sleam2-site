import "./home.css";

function Home() {
  return (
    <>
      <header>
        <nav className="nav-menu">
          <div className="">
            <h1 className="">Code Sleam</h1>
          </div>

          <div className="nav-links">
            <a href="">Buscar Empleo</a>
            <a href="">Publicar Empleos</a>
          </div>

          <div className="nav-buttons">
            <button className="nav-button-login">Iniciar sesion</button>
            <button className="nav-button-register">Registrarse</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="section-search-principal">
            <h1>Encuentra tu próximo empleo</h1>
            <p>El mejor lugar para buscar y publicar empleos</p>

            <div className="section-search-form">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                <input type="text" placeholder="Puesto, empresa o palabra clave" />
                <button>Buscar</button>
            </div>
        </section>

      </main>

      <footer>
        <p>© 2025 Code Sleam. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default Home;
