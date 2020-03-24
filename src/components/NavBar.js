import React from 'react'
import { Link } from 'gatsby'

export default ({ title }) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: '1',
        justifyContent: 'space-between'
      }}
    >
      <h1>
        <Link to='/'>{title}</Link>
      </h1>
      <nav>
        {/* TODO: Implement navigation links */}
        {/* TODO: Add a Login component */}
        {/* TODO: Add a link to the client-side only app */}
      </nav>
    </div>
  )
}
