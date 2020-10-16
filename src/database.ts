import mysql from "mysql";
import { Merchant, Transaction, User } from "./types";

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

export const Database = {
  connect: async () => connection.connect(),
  disconnect: async () => connection.end(),
  getUser: async (id: number): Promise<User | null> => {
    return new Promise((resolve) => {
      connection.query(
        "SELECT * FROM users WHERE id = ?",
        [id],
        (error, results) => {
          if (error) return resolve(null);
          if (results[0]) return resolve(results[0]);
          return resolve(null);
        }
      );
    });
  },
  getMerchant: async (id: number): Promise<Merchant | null> => {
    return new Promise((resolve) => {
      connection.query(
        "SELECT * FROM merchants WHERE id = ?",
        [id],
        (error, results) => {
          if (error) return resolve(null);
          if (results[0]) return resolve(results[0]);
          return resolve(null);
        }
      );
    });
  },
  getMerchantsByIds: async (ids: Array<number>): Promise<Array<Merchant>> => {
    return new Promise((resolve) => {
      connection.query(
        "SELECT * FROM merchants WHERE id in (?)",
        [ids],
        (error, results) => {
          if (error) return resolve([]);
          if (results) return resolve(results);
          return resolve([]);
        }
      );
    });
  },
  getTransactions: async (
    start: string,
    end: string
  ): Promise<Array<Transaction> | null> => {
    return new Promise((resolve) => {
      connection.query(
        `SELECT * FROM transactions WHERE date >= ? AND date <= ?`,
        [start, end],
        (error, results) => {
          if (error) console.log(error);
          if (error) return resolve(null);
          if (results) return resolve(results);
          return resolve(null);
        }
      );
    });
  },
};
