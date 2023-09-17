import { Outlet, Link } from "react-router-dom";
import Button from "../../components/Button";
import Quote from "../../components/Quote";
import SearchBar from "../../components/Searchbar";
import DecorativeLeaves from "../../components/DecorativeLeaves";
import "./Sidebar.css";

const quote = "If you're going through hell, keep going - Winston Churchill";

const createNew = (e) => {
    console.log(e.target.innerText);
};

const Sidebar = () => {
    return (
        <>
        <div className="sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to="new">
                            <Button onClick={createNew} text={"New"} className={"new-btn font-face-sp"}/>
                        </Link>
                    </li>
                    <li>
                        <Quote text={quote}/>
                    </li>
                    <li>
                        <SearchBar />
                    </li>
                    <li>
                        <DecorativeLeaves />
                    </li>
                </ul>
            </nav>
        </div>
        <Outlet />
        </>
    );
};

export default Sidebar;