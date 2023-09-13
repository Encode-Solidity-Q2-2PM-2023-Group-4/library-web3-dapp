import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
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
