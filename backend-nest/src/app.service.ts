import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as bookJson from './assets/Book.json';
import assert from 'assert';

@Injectable()
export class AppService {
  bookContract: ethers.Contract;
  provider: ethers.Provider;
  wallet: ethers.Wallet;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(
      process.env.RPC_ENDPOINT_URL ?? "",
    );
    this.wallet = new ethers.Wallet(
      process.env.PRIVATE_KEY ?? '', 
      this.provider,
    );
    this.bookContract = new ethers.Contract(
      process.env.BOOK_ADDRESS,
      bookJson.abi,
      this.wallet,
    );
  }

  // @param receipt_ will determine whether the receipt is printed to console or not, for example if we are just minting, we might want to see it, but for renting, where minting and setting user is involved, we may nott want to see the receipt until the rental is made.s
  async mintBook(URI: string, Metadata: string[], expires: number, receipt_: boolean): Promise<any> {
    console.log(`Minting book to ${this.wallet.address}.`);
    const tx = await this.bookContract.mint(URI, Metadata, expires);
    const receipt = await tx.wait();
    if (receipt_)
      console.log(receipt);
    return { success: true, txHash: tx.hash };
  }

  async setUser(tokenID: number, user: string, expires: number, receipt_: boolean): Promise<any> {
    console.log(`Setting user of Token ${tokenID} to ${user}.`);
    const tx = await this.bookContract.setUser(tokenID, user, expires);
    const receipt = await tx.wait();
    if (receipt_)
      console.log(receipt);
    return { success: true, txHash: tx.hash };
  }

  // @notice In future versions, we will have it so that the renter does not have own permissions as well, either by revoking owner privileges after minting and granting access or by creating a Library contract which is the owner of all books and which also grants use permissions.
  async rent(URI: string, Metadata: string[], expires: number): Promise<any> {
    this.mintBook(URI, Metadata, expires, true);
  }

  async userOf() {
    const narg = process.argv.length - 2;
    assert(narg==1);
    const tokenid = process.argv[2];
    
    const usr_addr = await this.bookContract.userOf(tokenid);
    console.log(`The user who is renting token ${tokenid} is ${usr_addr}`);
  
    //const exp_time = await bookContract.userExpires(tokenid);
    //console.log(`The expiry time is ${exp_time}`);
  }
}
