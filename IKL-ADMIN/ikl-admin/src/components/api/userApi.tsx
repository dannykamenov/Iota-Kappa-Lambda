const api = 'https://iota-kappa-lambda.onrender.com/api';


export const getAllUsers = async () => {
    const response = await fetch(`${api}/users`);
    return response.json();
};