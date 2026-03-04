import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['x-api-key'];
    const validKey = this.configService.get<string>('API_SECRET_KEY');

    if (apiKey !== validKey) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
  }
}