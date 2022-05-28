import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { AuthServerMiddleware } from '../middlewares/auth-server.middleware';
import { EventsModule } from '../events/events.module';


@Module({
    controllers: [NotificationsController],
    providers: [NotificationsService],
    imports: [EventsModule],
})
export class NotificationsModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(AuthServerMiddleware).forRoutes('notifications');
    }
}
