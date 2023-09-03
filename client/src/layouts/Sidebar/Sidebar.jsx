import { Outlet, Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <>
        <div className="sidebar">
            <nav>
                <ul>
                    <li>
                        <h2>My Journal</h2>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Outlet />
        </>
    )
}

export default Sidebar;