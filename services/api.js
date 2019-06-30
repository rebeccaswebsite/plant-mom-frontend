export const login = (loginUsername, loginPassword) => {
    const baseURL = "http://localhost:3000/api/v1/";
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
  
  export default { login };
  