import { useEffect, useState } from "react";
import styles from "./instructionsComponent.module.css";
import { useAccount, useBalance, useContractRead, useNetwork, usePrepareSendTransaction, useSendTransaction } from "wagmi";
import 'dotenv/config';
import { ethers } from 'ethers';
require('dotenv').config();
import React from "react";

interface Props {
  imageUrl: string;
}

interface State {
  imageLoaded: boolean;
}

class Thumbnail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { imageLoaded: false };
  }

  handleImageLoad = () => {
    this.setState({ imageLoaded: true });
  };

  render() {
    const { imageUrl } = this.props;
    const { imageLoaded } = this.state;

    return (
      <div
        style={{
          width: "200px",
          height: "200px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={imageUrl}
          alt="thumbnail"
          onLoad={this.handleImageLoad}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "100%",
            maxHeight: "100%",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      </div>
    );
  }
}

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
      <Thumbnail imageUrl="https://bafybeibpsknufhndbff7nuggensfgtwul7xunmxfhcysk767vp3uezyfyi.ipfs.cf-ipfs.com/" />
      <BookList></BookList>
      <br></br>
      <Buttons_layout></Buttons_layout>
    </div>
  )
}


function BookList() {
  return (
    <div style={{ textAlign: "left" }}>
      <table style={{ display: "flex", flexDirection: "column" }}>
        <tbody>
          <tr>
            <td>
              <strong>Author:</strong> Alland Edgar Poe
            </td>
          </tr>
          <tr>
            <td>
              <strong>Title:</strong> Alone
            </td>
          </tr>
          <tr>
            <td>
              <strong>Year of Publication:</strong> 1993
            </td>
          </tr>
          <tr>
            <td>
              <strong>Price </strong> 0.0 sETH
            </td>
          </tr>
          <tr>
            <td>
              <strong>Content:</strong>{" "}
              <a href="https://bafybeibpsknufhndbff7nuggensfgtwul7xunmxfhcysk767vp3uezyfyi.ipfs.cf-ipfs.com/">
                PREVIEW
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


function Buttons_layout(){
  return(      <div className={styles.buttons_container}>
    <Mint_book></Mint_book>
    <User_of></User_of>
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
      User of the NFT
    </button>
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

function Mint_book(): any{
  const { config } = usePrepareSendTransaction();
  const { data, isLoading, isSuccess } = useSendTransaction(config);
  const [value, setValue] = useState("");

  if (isLoading) return <p>Requesting mint from API...</p>;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value: value })
  };

  if (!data) return (
    <div>
      <button
        disabled={isLoading}
        className={styles.button}
        onClick={() => fetch("http://localhost:3001/mint", requestOptions)}>
        Rent NFT
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  )
  return <></>
}


function Set_user(): any{}

function Rent(): any{}


