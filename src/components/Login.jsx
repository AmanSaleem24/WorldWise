import PageNav from "./PageNav";
import styles from "./Login.module.css";
function Login() {
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input type="text" 
          id="email"/>
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input type="text" id="password"/>
        </div>

        <button className={styles.ctaLink}>Login</button>
      </form>
    </main>
  );
}

export default Login;
