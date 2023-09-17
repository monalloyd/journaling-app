import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
    return (
        <div className="content">
            <h1>Page Not Found</h1>
            <div>Back to <Link to="/">Homepage</Link></div>
        </div>
    )
};

export default ErrorPage;