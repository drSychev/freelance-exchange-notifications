import { Controller, Post, Body, } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import {SendNotificationDto} from "./dto/send-notification.dto";

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  async send(@Body() sendNotificationDto: SendNotificationDto) {
    this.notificationsService.send(sendNotificationDto);
    console.log(sendNotificationDto);
  }
}
