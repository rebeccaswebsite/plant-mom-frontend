import React, { Component } from 'react'
import { login } from '../services/api'
import Login from '../components/Login'
import '../index.css'
import BackgroundImage from '../images/background.png'

export default class HomePage extends Component {
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
        this.props.setMyRoom();
        this.props.history.push('/my-rooms')
      }
    });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { username, password } = this.state;
    return (
      <div>
          { !this.props.loggedIn ? ( 
       
             <Login handleChange={handleChange} handleSubmit={handleSubmit} username={username} password={password} /> 
         
          ) :  <img src={BackgroundImage} alt="background"/>
          }
      </div>
    );
  }
}
