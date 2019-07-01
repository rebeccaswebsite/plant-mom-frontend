import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navbar = props => {
    return (
        <Menu>
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

          <Menu.Item
            name='login'
            as={Link}
            to="/login"
          >
            Sign In 
          </Menu.Item>

          <Menu.Item
            name='logout'
            onClick={props.logout}
          >
            Sign Out
          </Menu.Item>
          </Menu>
      )
}

export default Navbar
