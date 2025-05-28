import PageNav from "./PageNav";
import styles from "./Login.module.css";
import {useAuth} from "../contexts/FakeAuthContext"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate()
  const {login} = useAuth()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  function handleLogin(e){
    e.preventDefault()
    const access = login(email, password)
    if(access) navigate('/app')
  }
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className={styles.ctaLink} onClick={handleLogin}>
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
