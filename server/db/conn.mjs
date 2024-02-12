import { MongoClient } from "mongodb";

const connectionString = process.env.URI || "";

console.log("Connecting to " + connectionString);

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("tierlistmaker");

export default db;