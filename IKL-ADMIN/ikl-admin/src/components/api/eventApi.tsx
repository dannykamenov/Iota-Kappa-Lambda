const api = 'http://localhost:3000/api';

export const uploadEvent = async (data: any) => {
    const response = await fetch(`${api}/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const getEvents = async () => {
    const response = await fetch(`${api}/events`);
    return response.json();
};