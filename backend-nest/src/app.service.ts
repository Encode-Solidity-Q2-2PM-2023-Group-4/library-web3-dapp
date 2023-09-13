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

  getHello(): string {
    return 'Hello World!';
  }

  mint(): any {
    return true
  }

  setUser(): any {
    return true
  }

  rent(): any {
    return true
  }
}
