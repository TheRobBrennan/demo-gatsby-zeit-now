import React from 'react'
import config from '../../config'

export default () => {
  return (
    <footer id='footer'>
      <ul className='icons'>
        {config.socialLinks.map((social, i) => {
          const { icon, name, url } = social
          return (
            <li key={`${name}-${i}`}>
              <a href={url} className={`icon ${icon}`} target='__blank'>
                <span className='label'>{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='copyright'>
        <li>
          &copy; {new Date().getFullYear()} Rob Brennan. All rights reserved.
        </li>
      </ul>
    </footer>
  )
}
