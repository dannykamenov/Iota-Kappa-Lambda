const api = 'https://iota-kappa-lambda.onrender.com/api';

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

export const deleteEvent = async (id: string) => {
    const response = await fetch(`${api}/events/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
};

export const getEvent = async (id: string | undefined) => {
    const response = await fetch(`${api}/events/${id}`);
    return response.json();
};

export const editEvent = async (data: any, id: string | undefined) => {
    const response = await fetch(`${api}/events/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response.json();
};