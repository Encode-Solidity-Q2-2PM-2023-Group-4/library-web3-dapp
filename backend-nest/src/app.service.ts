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

  async mintBook(URI: string, Metadata: string[]): Promise<any> {
    console.log(`Minting book to ${this.wallet.address}.`);
    const tx = await this.bookContract.mint(URI, Metadata);
    const receipt = await tx.wait();
    console.log(receipt);
    return { success: true, txHash: tx.hash };
  }

  async setUser(tokenID: number, user: string, expires: number): Promise<any> {
    console.log(`Setting user of Token ${tokenID} to ${user}.`);
    const tx = await this.bookContract.setUser(tokenID, user, expires);
    const receipt = await tx.wait();
    console.log(receipt);
    return { success: true, txHash: tx.hash };
  }

  rent(): any {
    return true
  }
}
