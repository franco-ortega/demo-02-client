export const getCats = async() => {
    return await fetch('https://demo-server-02-api-database.herokuapp.com/api/v1/cats', {
        method: 'GET'
    })
    .then(res => res.json());
};

export const postCat = async(data) => {
    return await fetch('https://demo-server-02-api-database.herokuapp.com/api/v1/cats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json());
};
