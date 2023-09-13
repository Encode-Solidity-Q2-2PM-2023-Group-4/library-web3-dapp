import { useAccount, useBalance, useContractRead, useNetwork, useSignMessage } from "wagmi";
import styles from "./instructionsComponent.module.css";
import { useEffect, useState } from "react";

export default function InstructionsComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <h1>My App</h1>
        </div>
      </header>
      <p className={styles.get_started}>
        <Buttons_layout></Buttons_layout>
      </p>
    </div>
  );
}

function Buttons_layout(){
  return(      <div className={styles.buttons_container}>
    <div className={styles.button}>
      <User_of></User_of>
    </div>
    <div className={styles.button}>
      <Mint_book></Mint_book>
    </div>
    <div className={styles.button}>
      <Set_user></Set_user>
    </div>
    <div className={styles.button}>
      <Rent></Rent>
    </div>
  </div>)
}

function User_of(): any{
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  if (!data) return (
    <button
        disabled={isLoading}
        className={styles.button}
        onClick={() => {
          setLoading(true);
          fetch("http://localhost:3001/user-of")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoading(false)
          });
        }}
    >
      User of the nft
    </button>
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

function Mint_book(): any{}

function Set_user(): any{}

function Rent(): any{}
