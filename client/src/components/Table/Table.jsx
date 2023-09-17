import { Link } from "react-router-dom";
import Button from "./../Button";
import "./Table.css";

const Table = () => {
    return <table>
        <tbody>
            <tr>
                <td className="col-1">
                    <Link to={`/entry/id`}>
                        this is a looooooooong title
                    </Link>
                </td>
                <td className="col-2">date</td>
                <td className="col-3">
                    <span>#tag</span>
                    <span>#tag2</span>
                    <span>#tag3</span>
                </td>
                <td className="col-4">
                    <Link to={`/update/id`}>
                        <Button 
                            className={"nav-btn-square update-btn robo"} 
                            text={"Update"}
                        />
                    </Link>
                    <Button 
                        className={"nav-btn-square delete-btn robo"} 
                        text={"Delete"} 
                        onClick={(e) => console.log(e.target)}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <Link to={`/entry/id`}>
                        title
                    </Link>
                </td>
                <td>date</td>
                <td>
                    <span>#tag</span>
                    <span>#tag2</span>
                    <span>#tag3</span>
                </td>
                <td className="right">
                    <Link to={`/update/id`}>
                        <Button 
                            className={"nav-btn-square update-btn robo"} 
                            text={"Update"}
                        />
                    </Link>
                    <Button 
                        className={"nav-btn-square delete-btn robo"} 
                        text={"Delete"} 
                        onClick={(e) => console.log(e.target)}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <Link to={`/entry/id`}>
                        title
                    </Link>
                </td>
                <td>date</td>
                <td>
                    <span>#tag</span>
                    <span>#tag2</span>
                    <span>#tag3</span>
                </td>
                <td className="right">
                    <Link to={`/update/id`}>
                        <Button 
                            className={"nav-btn-square update-btn robo"} 
                            text={"Update"}
                        />
                    </Link>
                    <Button 
                        className={"nav-btn-square delete-btn robo"} 
                        text={"Delete"} 
                        onClick={(e) => console.log(e.target)}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <Link to={`/entry/id`}>
                        title
                    </Link>
                </td>
                <td>date</td>
                <td>
                    <span>#tag</span>
                    <span>#tag2</span>
                    <span>#tag3</span>
                </td>
                <td className="right">
                    <Link to={`/update/id`}>
                        <Button 
                            className={"nav-btn-square update-btn robo"} 
                            text={"Update"}
                        />
                    </Link>
                    <Button 
                        className={"nav-btn-square delete-btn robo"} 
                        text={"Delete"} 
                        onClick={(e) => console.log(e.target)}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <Link to={`/entry/id`}>
                        title
                    </Link>
                </td>
                <td>date</td>
                <td>
                    <span>#tag</span>
                    <span>#tag2</span>
                    <span>#tag3</span>
                </td>
                <td className="right">
                    <Link to={`/update/id`}>
                        <Button 
                            className={"nav-btn-square update-btn robo"} 
                            text={"Update"}
                        />
                    </Link>
                    <Button 
                        className={"nav-btn-square delete-btn robo"} 
                        text={"Delete"} 
                        onClick={(e) => console.log(e.target)}
                    />
                </td>
            </tr>
        </tbody>
    </table>
}

export default Table;