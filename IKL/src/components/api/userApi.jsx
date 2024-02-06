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

