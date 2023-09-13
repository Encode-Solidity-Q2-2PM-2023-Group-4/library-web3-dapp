import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MintBookDTO } from './dtos/mintBook.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async mintBook(@Body() body: MintBookDTO): Promise<any> {
    console.log({ body });
    return await this.appService.mintBook(body.URI, body.metadata);
  }

  @Post()
  setUser(): any {
    return this.appService.setUser();
  }

  @Post()
  rent(): any {
    return this.appService.rent();
  }
}
