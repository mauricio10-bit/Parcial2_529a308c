import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

export const Cabecera = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom border-body" data-bs-theme="light" style={{ backgroundColor: '#00e3ea' }}>
                <div className="container-fluid">
                    <Link className='navbar-brand active' to="/">
                        <img src={Logo} alt="Manchester City FC" width="53" height="53" />
                    </Link>

                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id='navbarNav'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link active' to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' to="*">Editoriales</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Revistas
                                </a>
                                <ul className="dropdown-menu" style={{ backgroundColor: '#00e3ea' }}>
                                    <li>
                                        <Link className='dropdown-item' to="/regrev">
                                            Registrar revistas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' to="/adminrev">
                                            Administrar revistas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' to="/lisrev">
                                            ListarRevistas
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' to="/acer">
                                    Quienes somos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}