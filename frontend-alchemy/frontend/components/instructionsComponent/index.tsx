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
          <p>Button 1</p>
        </div>
        <div className={styles.button}>
          <p>Button 2</p>
        </div>
        <div className={styles.button}>
          <p>Button 3</p>
        </div>
        <div className={styles.button}>
          <p>Button 4</p>
        </div>
      </div>
    </div>
  );
}
