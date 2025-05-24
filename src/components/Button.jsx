// import styles from './Button.module.css'
// function Button({children, onClick, type, submit = false}) {
//     return (
//       <div
//         onClick={onClick}
//         className={`${styles.btn} ${styles[type]}`}
//         type={submit ? "submit" : ""}
//       >
//         {children}
//       </div>
//     );
// }

// export default Button


import styles from "./Button.module.css";

function Button({ children, onClick, type = "button" }) {
  return (
    <button
      onClick={onClick}
      type={type === "primary" ? "submit" : type}
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
