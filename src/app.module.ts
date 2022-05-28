import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';


@Module({
    imports: [
        ConfigModule.forRoot(),
        EventsModule,
        NotificationsModule,
    ],
})
export class AppModule {
}