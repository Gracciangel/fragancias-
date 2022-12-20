import { Link } from "react-router-dom";
import Style from "./styles/menu.module.css"

const NavBar = () => {
        return (
                <>
                        <a className={Style.menu} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <img className={Style.btnImg} src="../img/menu.png" alt="" />
                        </a>


                        <div className="offcanvas offcanvas-start " tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Fragancias De Lo Alto</h5>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                        <div>
                                                Menu de Navegacion
                                        </div>
                                        <nav>
                                                <ul className={Style.menuList}>
                                                        <Link className={Style.menuLink} to='/'>Home</Link>
                                                        <Link className={Style.menuLink} to='/item'>Productos</Link>
                                                        <Link className={Style.menuLink} to='/contacto'>Contacto</Link>
                                                </ul>
                                        </nav>
                                </div>
                        </div>
                </>
        )
}

export default NavBar;