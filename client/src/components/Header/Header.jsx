import { Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <>
        <div className="header">
            <nav>
                <ul>
                    <li>
                    <div>Header</div>
                    </li>
                </ul>
            </nav>
        </div>
        <Outlet />
        </>
    )
}

export default Header;