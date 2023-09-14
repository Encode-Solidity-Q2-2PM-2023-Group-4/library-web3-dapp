import { useState } from "react";
import styles from "./instructionsComponent.module.css";
import { usePrepareSendTransaction, useSendTransaction } from "wagmi";
import 'dotenv/config';
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
              <strong>Author:</strong> Edgar Allan Poe
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
    <RentBook></RentBook>
    <UserOf></UserOf>
  </div>)
}


function UserOf(): any{
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    tokenID: JSON.stringify(6),
  };

  if (!data) return (
    <button
        disabled={isLoading}
        className={styles.button}
        onClick={() => {
          setLoading(true);
          fetch(`http://localhost:3001/user-of`, requestOptions)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoading(false)
          });
        }}
    >
      Check NFT User
    </button>
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

function RentBook(): any{
  const { config } = usePrepareSendTransaction();
  const { data, isLoading, isSuccess } = useSendTransaction(config);
  var seconds = new Date().getTime() / 1000;
  const body = { URI: "https://bafybeibpsknufhndbff7nuggensfgtwul7xunmxfhcysk767vp3uezyfyi.ipfs.cf-ipfs.com/", Metadata: ['title'], expires: seconds + 120 };

  if (isLoading) return <p>Requesting rent from API...</p>;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
  if (!data) return (
    <div>
      <button
        disabled={isLoading}
        className={styles.button}
        onClick={() => {
          fetch("http://localhost:3001/rent", requestOptions)
        }}
      >
        Rent NFT
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  )
  return <></>
}

function SetUser(): any{}
