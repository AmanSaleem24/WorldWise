import { NavLink } from "react-router-dom"
import styles from "./PageNav.module.css"
import Logo from "./Logo"

function PageNav() {
    return (
        <div className={styles.nav}>
            <Logo />
            <ul >
                <li>
                    <NavLink to="/">Homepage</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={styles.ctaLink}>Login</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default PageNav
