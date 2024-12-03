const NavBar = () => {
    return (
        <nav>
            <div className="navbar-logo">
                <img src="pato.png" alt="Logo de Compra tu Pato" />
            </div>
            <h1>Compra tu Pato</h1>
            <div>
                <a href="#inicio">Inicio</a>
                <a href="#productos">Productos</a>
                <a href="#contacto">Contacto</a>
            </div>
            <CartWidget />
        </nav>
    );
};