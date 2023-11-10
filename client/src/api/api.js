const server = new URL(import.meta.env.VITE_SERVER_HOST);

export function fetchJson(endpoint) {
    return fetch(`${server}${endpoint}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then((response) => response.json())
    .catch((err) => console.log(err));
}

export function createTag(tag) {
    return fetch(`${server}api/tags`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag),
    }).then((response) => response.json())
    .catch((err) => console.log(err));
}

export function createEntry(entry) {
    return fetch(`${server}api/entries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry),
    }).then((response) => response.json())
    .catch((err) => console.log(err));
}

export function updateEntry(entry) {
    return fetch(`${server}api/entries/${entry._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry),
    }).then((response) => response.json())
    .catch((err) => console.log(err));
}

export function deleteEntry(id) {
    return fetch(`${server}api/entries/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).catch(error => {
        console.warn(error);
    });
}