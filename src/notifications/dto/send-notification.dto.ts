import { IsDateString, IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class SendNotificationDto {

    @IsNotEmpty()
    @IsString()
    senderLogin: string

    @IsNotEmpty()
    @IsNumberString()
    senderId: string

    @IsNotEmpty()
    @IsNumberString()
    userId: string;

    @IsNotEmpty()
    @IsString()
    login: string;

    @IsNotEmpty()
    @IsString()
    message: string;

    @IsNotEmpty()
    @IsDateString()
    date: Date;

    @IsString()
    attach: string;
}
