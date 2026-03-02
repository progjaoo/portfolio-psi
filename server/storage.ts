import { db } from "./db";
import { messages, type InsertMessage, type Message } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    if (!db) {
      console.log("Database not available, skipping save:", insertMessage);
      return { ...insertMessage, id: 0, createdAt: new Date() } as Message;
    }
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }
}

export const storage = new DatabaseStorage();
