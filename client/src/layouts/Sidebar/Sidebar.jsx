import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import SelectMenu from "../../components/SelectMenu";
import Quote from "../../components/Decoration/Quote";
import DecorativeLeaves from "../../components/Decoration/DecorativeLeaves";
import { quote, dummyTags } from "../../constants/DummyData";
import "./Sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();

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
                        <SelectMenu tags={dummyTags}/>
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