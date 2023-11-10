import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchJson } from "../../api/api";
import Button from "../../components/Button";
import SelectMenu from "../../components/SelectMenu";
import Quote from "../../components/Decoration/Quote";
import DecorativeLeaves from "../../components/Decoration/DecorativeLeaves";
import { quote } from "../../constants/Constants";
import "./Sidebar.css";

const Sidebar = () => {
    const [ tags, setTags ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchJson("api/tags")
        .then((data) => {
            setTags(data);
        });
    }, []);

    return (
        <>
        <div className="sidebar">
            <nav>
                <ul>
                    <li className="li-one">
                        <Button 
                            text={"New"} 
                            className={"new-btn font-face-sp"}
                            onClick={() => navigate("new")}
                        />
                    </li>
                    <li className="li-two">
                        <Quote className={"quote"} text={quote}/>
                    </li>
                    <li className="li-three">
                        <SelectMenu tags={tags}/>
                    </li>
                    <li className="li-four">
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