const api = 'http://localhost:3000/api'

export const getPhotos = () => {
    return fetch(`${api}/photos`, {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        },
    })
        .then((response) => {
        return response.json()
        })
        .catch((err) => console.log(err))
};