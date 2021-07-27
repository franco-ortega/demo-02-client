export const getCats = async() => {
    return await fetch('https://demo-server-02-api-database.herokuapp.com/api/v1/cats', {
        method: 'GET'
    })
    .then(res => res.json());
    // .then((cats) => cats.map(cat => ({
    //     id: cat.id,
    //     catName: cat.catName,
    //     breed: cat.breed
    // })));
};
