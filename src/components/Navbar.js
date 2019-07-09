import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navbar = props => {
    return (
        <Menu>
          <Menu.Item
            name='plant-mom'
            as={ Link }
            to="/"
          >
          <img style={{'fontSize':53}} alt="plant mom" src={'/plant_mom_black_text.png'} />
          </Menu.Item>

          <Menu.Item
            name='my-rooms'
            as={ Link }
            to="/my-rooms"
          >
            My Plant Rooms
          </Menu.Item>

          <Menu.Item
            name='plants'
            as={ Link }
            to="/plants"
          >
            Plants
          </Menu.Item>

          {
          props.user === ""
          ?<Menu.Item
            name='login'
            as={Link}
            to="/login"
            position='right'
          >
            Sign In 
          </Menu.Item>

          :<Menu.Item
            name='logout'
            onClick={() => {window.confirm("Are you sure you want to logout?") && props.logout()} }
            position='right'
          >
            Sign Out
          </Menu.Item>
          }
          </Menu>
      )
}

export default Navbar
