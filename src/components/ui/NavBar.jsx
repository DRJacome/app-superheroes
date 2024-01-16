import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark animate__animated animate__fadeIn">

      <Link
        className="navbar-brand"
        to="/"
      >
        Página principal
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className="nav-item nav-link"
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/busqueda"
          >
            Búsqueda
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            className="nav-item nav-link"
            to="/login"
          >
            Salir
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}