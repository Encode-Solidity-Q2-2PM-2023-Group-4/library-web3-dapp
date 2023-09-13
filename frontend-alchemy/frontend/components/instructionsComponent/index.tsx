import { useEffect, useState } from "react";
import styles from "./instructionsComponent.module.css";
import { useAccount, useBalance, useContractRead, useNetwork, usePrepareSendTransaction, useSendTransaction } from "wagmi";
import 'dotenv/config';
import { ethers } from 'ethers';
require('dotenv').config();

export default function InstructionsComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <h1>
            nftLibrary<span> Dapp </span>
          </h1>
        </div>
      </header>
      <PageBody></PageBody>
    </div>
  );
}

function PageBody() {
  return (
    <div>
      <BookTable></BookTable>
    </div>
  )
}


function BookTable() {
  return (
  <div style={{ textAlign: "left" }}>
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
        <td><button>RENT</button></td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

