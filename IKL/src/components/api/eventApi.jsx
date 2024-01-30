const api = 'https://iota-kappa-lambda.onrender.com/api'

export const getEventsByYear = (year) => {
    return fetch(`${api}/events/year/${year}`, {
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