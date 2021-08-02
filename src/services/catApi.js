const API_URL = process.env.REACT_APP_API_URL;

export const getCats = async() => {
    return await fetch(API_URL, {
        method: 'GET'
    })
    .then(res => res.json());
};

export const postCat = async(data) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json());
};
