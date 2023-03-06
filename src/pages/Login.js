import React, { useReducer } from 'react'
import { ReactComponent as Eye } from '../images/clarity_eye-hide-line.svg'

export default function Login() {
  const [showPassword, toggleShowPassword] = useReducer((st) => !st, false)
  return (
    <div className="login flex row">
      <div className="login-form-container flex column">
        <span className="login-form-header">
          <span>
            Login to your<br/>
          </span>
          <span>
            Master{' '}
          </span>
          <span>
            Account
            <br/>
          </span>
          <span>
            To See what is going on with your business
          </span>
        </span>
        <form onSubmit={e => e.preventDefault()}>
          <div className="flex column">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="mail@abc.com" />
          </div>
          <div className="flex column">
            <label htmlFor="password">Password</label>
            <div style={{ position: 'relative', display: 'flex', width: '100%' }}>
              <input id="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••••" />
              <Eye
                onClick={toggleShowPassword}
                style={{
                  stroke: showPassword ? '#5657B1' : 'initial',
                  strokeWidth: '0.5px',
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  right: '20px',
                }}
              />
            </div>
          </div>
          <div className="flex row space-between" style={{ marginTop: 10 }}>
            <div className="flex row" style={{ alignItems: 'center' }}>
              <input type="checkbox" />
              <label style={{ whiteSpace: 'nowrap', marginLeft: 8, marginBottom: '2px', fontSize: 12, color: '#A1A1A1' }}>Remember me</label>
            </div>
            <span style={{
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '19px',
              color: '#6A6BC2',
            }}>
              Forgot Password?
            </span>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}