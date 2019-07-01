import React from "react";

import { login } from "../services/api";

class Login extends React.PureComponent {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = () => {
    login(this.state.username, this.state.password).then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        this.props.login(data);
      }
    });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, password } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div>
        <form className="ui form">
          <div className="field">
              <label>Username</label>
              <input type="text" name="username" value={username} onChange={handleChange} />
          </div>
          <div className="field">
              <label>Password</label>
              <input type="text" name="password" value={password} onChange={handleChange} />
          </div>
        </form>
        <button className="ui button" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    );
  }
}

export default Login;