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
        this.props.login(data.token, data.username);
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
        <form>
            <input type="text" name="username" value={username} onChange={handleChange} />
            <input type="text" name="password" value={password} onChange={handleChange} />
        </form>
        <button onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    );
  }
}

export default Login;