"use client";

import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles["form-container"]}>
        <div className={styles.test}>
          <div className={styles["test-1"]}></div>
          <div className={styles["test-2"]}>
            <p>Welcome Back!</p>
            <p>Enter your details to sign in</p>
            <p>Don&apos;t have an account?</p>
            <button>SIGN UP</button>
          </div>
          <div className={styles["test-3"]}></div>
          <div className={styles["test-4"]}></div>
          <div className={styles["red-panel"]}></div>
        </div>
      </div>
    </div>
  );
}
