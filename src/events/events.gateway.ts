import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { SHA1 } from 'crypto-js';


@Injectable()
@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class EventsGateway implements OnGatewayConnection {

    @WebSocketServer()
    server: Server;

    public getServer(): Server {
        return this.server;
    }

    handleConnection(client: Socket): any {
        let userId = client.handshake.query.userId ;
        let hash   = client.handshake.query.hash;
        let has    = SHA1(process.env.SALT + userId + process.env.SALT);

        if (hash !== has.toString()) {
            client.disconnect();
        } else {
            client.join(userId);
        }

        console.log(userId, has.toString(), hash);
    }
}