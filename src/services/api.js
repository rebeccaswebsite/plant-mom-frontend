const baseURL = "http://localhost:3000/api/v1";

export const login = (loginUsername, loginPassword) => {
    const loginURL = baseURL + "/login";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword
      })
    };
  
    return fetch(loginURL, options).then(resp => resp.json());
  }

  export function validate () {
    return fetch(baseURL + "/validate", {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export function getMyRooms () {
    return fetch(baseURL + "/my-rooms", {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}
  
  export default { login, validate, getMyRooms };
  