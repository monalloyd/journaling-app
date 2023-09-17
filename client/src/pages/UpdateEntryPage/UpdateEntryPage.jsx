import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";

const dummyEntries = [
    {   
        id: 1111,
        title: "one",
        date: "date1",
        tags: ["tag"],
        content: "blaaaaaaahhhhhhh1"
    },
    {
        id: 2222,
        title: "two",
        date: "date2",
        tags: ["tag2"],
        content: "blaaaaaaahhhhhhh2"
    },
    {
        id: 3333,
        title: "three",
        date: "date3",
        tags: ["tag3"],
        content: "blaaaaaaahhhhhhh3"
    },
    {
        id: 4444,
        title: "four",
        date: "date4",
        tags: ["tag", "tag2"],
        content: "blaaaaaaahhhhhhh4"
    },
    {
        id: 5555,
        title: "five",
        date: "date5",
        tags: ["tag", "tag3"],
        content: "blaaaaaaahhhhhhh5"
    },
    {
        id: 6666,
        title: "six",
        date: "date6",
        tags: ["tag2", "tag3"],
        content: "blaaaaaaahhhhhhh6"
    }
]

const fetchEntry = (param) => {
    //TODO: write fetch when backend is done
    return dummyEntries.find((entry) => entry.id === parseInt(param));
}

const UpdateEntryPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [entry, setEntry] = useState(null);
    const [entryLoading, setEntryLoading] = useState(true);

    useEffect(() => {
        setEntryLoading(true);
        setEntry(fetchEntry(id));
        setEntryLoading(false);
    }, [id]);

    const saveUpdatedEntry = () => {
        console.log("saved");
    };

    if (entryLoading) {
        //TODO: design a loading spinner
        return <div>Loading...</div>;
    }

    return (
        <div className="content">
            <Form 
                entry={entry}
                onSave={saveUpdatedEntry}
                onCancel={() => navigate("/")}
            />
        </div>
    );
}

export default UpdateEntryPage;