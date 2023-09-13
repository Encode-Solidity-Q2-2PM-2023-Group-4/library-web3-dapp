import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  mint(): any {
    return this.appService.mint();
  }

  @Post()
  setUser(): any {
    return this.appService.setUser();
  }

  @Post()
  rent(): any {
    return this.appService.mint();
  }
}
