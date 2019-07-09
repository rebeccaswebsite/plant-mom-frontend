const baseURL = "http://localhost:3000";

export const login = (loginUsername, loginPassword) => {
    const loginURL = baseURL + "/login";
    const options = {
      method: "POST",
      headers : { 
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword
      })
    };
  
    return fetch(loginURL, options).then(resp => resp.json());
  }

export const signUp = (username, password) => {
    const signUpURL = baseURL + "/users";
    const options = {
      method: "POST",
      headers : { 
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
      body: JSON.stringify({
        username: username,
        password: password
      })
    };
  
  return fetch(signUpURL, options).then(resp => resp.json())
}

export function validate () {
    return fetch(baseURL + "/validate", {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export function getMyRooms () {
    return fetch(baseURL + "/my-rooms", {
      headers: { 
      "Content-Type": "application/json", 
      'Authorisation': localStorage.token 
    }
    }).then(resp => resp.json())
}

export function getPlants () {
  return fetch(baseURL + "/plants")
  .then(resp => resp.json())
}

export const sendSuggestion = (plant_id, suggestion) => {
  const suggestion_url = baseURL + "/suggestions";
  const options = {
    method: "POST",
    headers : { 
      "Content-Type": "application/json",
      "Accept": "application/json"
     },
    body: JSON.stringify({
      plant_id: plant_id,
      suggestion: suggestion
    })
  };

  return fetch(suggestion_url, options).then(resp => resp.json());
}

export const addRoom = (user_id, name) => {
  const roomsURL = baseURL + "/rooms";
  const options = {
    method: "POST",
    headers : { 
      "Content-Type": "application/json",
      "Accept": "application/json"
     },
    body: JSON.stringify({
      user_id: user_id,
      name: name 
    })
  };

  return fetch(roomsURL, options).then(resp => resp.json());
}

export const deleteRoom = (room_id) => {
  const roomsURL = baseURL + "/rooms/" + room_id;
  const options = {
    method: "DELETE",
    headers : { 
      "Content-Type": "application/json",
      "Accept": "application/json"
     },
    body: JSON.stringify({
      room_id: room_id
    })
  };

  return fetch(roomsURL, options).then(resp => resp.json());
}

export const updateRoom = (room_id, plant_id) => {
  const roomplantsURL = baseURL + "/room_plants";
  const options = {
    method: "POST",
    headers : { 
      "Content-Type": "application/json",
      "Accept": "application/json"
     },
    body: JSON.stringify({
      room_id: room_id,
      plant_id: plant_id 
    })
  };

  return fetch(roomplantsURL, options).then(resp => resp.json());
}

export const deleteRoomPlant = roomplant_id => {
  const roomplantsURL = baseURL + "/room_plants";
  const options = {
    method: "DELETE",
    headers : { 
      "Content-Type": "application/json",
      "Accept": "application/json"
     },
    body: JSON.stringify({
      roomplant_id: roomplant_id
    })
  };

  return fetch(roomplantsURL, options).then(resp => resp.json());
}
  
  export default { login, validate, getMyRooms, getPlants, sendSuggestion, addRoom, signUp, deleteRoom, updateRoom, deleteRoomPlant };
  