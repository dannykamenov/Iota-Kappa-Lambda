const api = "https://iota-kappa-lambda.onrender.com/api";

export const createUser = (user) => {
  return fetch(`${api}/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateUser = (user) => {
    return fetch(`${api}/users/${user.id}`, {
        method: "PUT",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => {
        return response.json();
        })
        .catch((err) => console.log(err));
};

export const getUser = (id) => {
    return fetch(`${api}/users/${id}`, {
        method: "GET",
    })
        .then((response) => {
        return response.json();
        })
        .catch((err) => console.log(err));
};

