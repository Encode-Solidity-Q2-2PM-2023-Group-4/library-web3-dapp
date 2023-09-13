import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as bookJson from './assets/Book.json';

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
  async mintBook(URI: string, Metadata: string[], receipt_: boolean): Promise<any> {
    console.log(`Minting book to ${this.wallet.address}.`);
    const tx = await this.bookContract.mint(URI, Metadata);
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

  async rent(URI: string, Metadata: string[], user: string, expires: number): Promise<any> {
    this.mintBook(URI, Metadata, false);
  }
}
