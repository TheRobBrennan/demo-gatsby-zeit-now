import React from 'react'

const Login = () => {
  return (
    <>
      <form>
        <h2>Login</h2>
        <div>
          <label htmlFor='email'>Email</label>
          <input name='email' type='text'/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input name='password' type='password'/>
        </div>
        <button type='submit'>Log in</button>
      </form>
    </>
  )
}
export default Login
