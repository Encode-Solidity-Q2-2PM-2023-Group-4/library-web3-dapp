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
      <PageBody></PageBody>
      </div>
    </div>
  );
}


function PageBody() {
  return (
    <div className={styles.buttons_container}>
      <BookTable></BookTable>
    </div>
  )
}

function BookTable() {
  return (
  <div>
  <table>
    <thead>
      <tr>
        <th>Author</th>
        <th>Title</th>
        <th>Year of Publication</th>
        <th>Link</th>
        <th>RENT</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alland Edgar Poe</td>
        <td>Alone</td>
        <td>1993</td>
        <td><a href="https://bafybeibpsknufhndbff7nuggensfgtwul7xunmxfhcysk767vp3uezyfyi.ipfs.cf-ipfs.com/">PREVIEW</a></td>
        <td><div className={styles.buttons_container}>RENT</div></td>
      </tr>
    </tbody>
  </table>
</div>
  )
}
