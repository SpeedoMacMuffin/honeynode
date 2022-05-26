import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/*')
  getHello(@Req() req: Request): any {
    const { url, headers, ips } = req;
    console.log({ url, headers, ips });
    // get ip adress of request
    const ip = ips[0];
    // get url of request
    const urlPath = url.split('/')[1];
    console.log({ ip, urlPath });
    return { url, headers, ips, ip, urlPath };
  }
}
