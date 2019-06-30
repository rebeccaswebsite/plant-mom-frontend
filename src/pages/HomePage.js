import React from 'react'

import { Link } from 'react-router-dom'

const HomePage = props =>
  <div>
    <h1>Plant Mom</h1>
    <Link to='/login'>Login</Link> | <Link to='/plant-rooms'>My Plant Rooms</Link>
  </div>

export default HomePage