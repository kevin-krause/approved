import { Client, QueryResult } from "pg";
import { getEnv } from "../commons/getEnv";

export default class Database {
  private client: Client;

  constructor() {
    this.client = new Client({
      host: getEnv("POSTGRES_HOST"),
      port: parseInt(getEnv("POSTGRES_PORT")),
      user: getEnv("POSTGRES_USER"),
      database: getEnv("POSTGRES_DATABASE"),
      password: getEnv("POSTGRES_PASSWORD")
    })
  } 

  async query(query: string): Promise<QueryResult> {
    try {
      await this.client.connect();
      const res = await this.client.query(query);
      await this.client.end();
      return JSON.stringify(res.rows, null, 2);
    } catch (err) {
      console.error("Database error:", err);
      throw err;
    }
  }
}
