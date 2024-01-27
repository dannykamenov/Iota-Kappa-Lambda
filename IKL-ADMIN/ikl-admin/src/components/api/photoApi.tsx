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

export const getPhotos = async () => {
    const response = await fetch(`${api}/photos`);
    return response.json();
};

export const deletePhoto = async (id) => {
    const response = await fetch(`${api}/photos/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
};