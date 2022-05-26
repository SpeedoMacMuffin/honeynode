import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { getClientIp } from '@supercharge/request-ip';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/*')
  getHello(@Req() req: Request): any {
    const { url, headers, ips } = req;
    const ip = getClientIp(req);
    return ip.replace('::ffff:', '');
  }
}
