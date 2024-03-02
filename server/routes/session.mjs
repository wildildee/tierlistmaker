import express from "express";
import db from "../db/conn.mjs";
import { BSON } from "mongodb";

const router = express.Router();

// Get a single session token if valid
router.get("/:id", async (req, res) => {
  let collection = await db.collection("sessions");
  let oid = new BSON.ObjectId(req.params.id);
  let result = await collection.findOne({_id: oid});
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Add a new session token if valid
router.post("/", async (req, res) => {
  let collection = await db.collection("users");
  let result1 = await collection.findOne({name: req.query.username, passhash: req.query.passhash});
  console.log(result1);
  // collection = await db.collection("sessions");
  // let newDocument = {
  //   userID: 
  // };
  // let result2 = await collection.insertOne(newDocument);
  res.send(result1).status(204);
});

export default router;