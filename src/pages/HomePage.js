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
        console.log(data.error);
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
            <div> 
             <Login handleChange={handleChange} handleSubmit={handleSubmit} username={username} password={password} /> 
            </div>
          ) :  
          (
            <>
              <img src={BackgroundImage} alt="background"/>
              <p>Illustration by <a href="https://kath-nash.com/buying-plants-online" target="_blank" rel="noopener noreferrer">Kath Nash</a></p>
            </>
          )
          }
      </div>
    );
  }
}
