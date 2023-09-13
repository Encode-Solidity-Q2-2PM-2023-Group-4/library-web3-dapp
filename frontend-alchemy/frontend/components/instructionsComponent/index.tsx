import styles from "./instructionsComponent.module.css";

export default function InstructionsComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <h1>
            Web3 <span>E-Book Library</span>
          </h1>
          <h3>The ultimate solution for your web3 literary assets</h3>
        </div>
      </header>

      <div className={styles.buttons_container}>
        <div className={styles.button}>
          <p>Add Components</p>
        </div>
        <div className={styles.button}>
          <p>Explore Templates</p>
        </div>
        <div className={styles.button}>
          <p>Visit Docs</p>
        </div>
        <div className={styles.button}>
          <p>Contribute</p>
        </div>
      </div>
    </div>
  );
}
