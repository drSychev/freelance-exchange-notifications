import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class AuthServerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        let authToken = req.header('Authorization');
        if (authToken === process.env.AUTH_TOKEN) {
            return next();
        }

        throw new UnauthorizedException();
    }
}