import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

//styles
import styles from './Login.module.css'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPasword] = useState('')
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }
  
  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <label>
        <span>email:</span>
        <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
        type="password"
        onChange={(e) => setPasword(e.target.value)}
        value={password}
        />
      </label>
      {!isPending && <button className='btn'>Login</button>}
      {isPending && <button className='btn' disabled>Loading</button>}
      {error && <p>{error}</p>}
    </form>
  )
}
