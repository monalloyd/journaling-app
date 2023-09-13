import { Outlet, Link } from "react-router-dom";
import Button from "../../components/Button";
import Quote from "../../components/Quote";
import SearchBar from "../../components/Searchbar";
import DecorativeLeaves from "../../components/DecorativeLeaves";
import "./Sidebar.css";

const Sidebar = () => {
    const quote = "If you're going through hell, keep going - Winston Churchill"
    
    const createNew = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <>
        <div className="sidebar">
            <nav>
                <ul>
                    <li>
                        <Button onClick={createNew} text={"New"} className={"new-button font-face-sp"}/>
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
    )
}

export default Sidebar;