import Table from "../../components/Table";
import { dummyEntries } from "../../constants/DummyData";

const HomePage = () => {
    return (
        <div className="content">
          <Table dummyEntries={dummyEntries}/>
        </div>
      );
}

export default HomePage;