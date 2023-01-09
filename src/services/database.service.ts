// database.service.ts
import { Injectable } from '@nestjs/common';
import * as pg from 'pg';

@Injectable()
export class DatabaseService {
  private client: pg.Client;

  async connect(): Promise<void> {
    this.client = new pg.Client({
      host: '192.168.0.107',
      port: 5432,
      user: 'postgres',
      password: 'teteti546',
      database: 'my_database',
    });
    await this.client.connect();
  }

  async query(text: string, params?: any[]): Promise<pg.QueryResult> {
    if (!this.client) {
      throw new Error('Cliente não conectado');
    }
    return this.client.query(text, params);
  }

  async close(): Promise<void> {
    await this.client.end();
  }
}