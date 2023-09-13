import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MintBookDTO } from './dtos/mintBook.dto';
import { SetUserDTO } from './dtos/setUser.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async mintBook(@Body() body: MintBookDTO): Promise<any> {
    console.log({ body });
    return await this.appService.mintBook(body.URI, body.metadata);
  }

  @Post()
  async setUser(@Body() body: SetUserDTO): Promise<any> {
    console.log({ body });
    return await this.appService.setUser(body.tokenID, body.user, body.expires);
  }

  @Post()
  rent(): any {
    return this.appService.rent();
  }
}
