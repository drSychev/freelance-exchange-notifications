import { Injectable } from '@nestjs/common';
import { SendNotificationDto } from './dto/send-notification.dto';
import { EventsGateway } from '../events/events.gateway';

@Injectable()
export class NotificationsService {
    constructor(private eventGateway: EventsGateway) {
    }

    send(sendNotificationDto: SendNotificationDto) {
        this.eventGateway
            .getServer()
            .to(String(sendNotificationDto.userId))
            .emit('notification', sendNotificationDto)

        this.eventGateway
            .getServer()
            .to(String(sendNotificationDto.senderId))
            .emit('my_notification', sendNotificationDto)
    }
}
