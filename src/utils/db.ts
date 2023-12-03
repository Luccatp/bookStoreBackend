import { Pool } from "pg";

const pool = new Pool();

interface Query {
  text: string;
  params?: any[];
}

export const query = async ({ text, params }: Query) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log("executed query", { text, duration, rows: res.rowCount });
  return res;
};
