import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

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
