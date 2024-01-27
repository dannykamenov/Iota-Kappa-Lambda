const api = 'http://localhost:3000/api';

export const uploadPhoto = async (url, name) => {
    const response = await fetch(`${api}/photos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url, name }),
    });
    return response.json();
};