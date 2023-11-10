import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchJson } from "../../api/api";
import Table from "../../components/Table";

const HomePage = () => {
  const navigate = useNavigate();
  const [ entries, setEntries ] = useState([]);
  const [ fetched, setFetched ] = useState(false);

  useEffect(() => {
    const fetchPromise = fetchJson("api/entries")
      .then((data) => {
          setEntries(data);
      });
    
    Promise.all([fetchPromise]).then(() => !fetched ? setFetched(true) : setFetched(false));
  }, []);

  const onDelete = (id) => {
    navigate(`entry/delete/${id}`, { replace: true });
  }

  return (
    <div className="content">
      {
        fetched && <Table fetchedEntries={entries} onDelete={onDelete}/>
      }
    </div>
  );
}

export default HomePage;