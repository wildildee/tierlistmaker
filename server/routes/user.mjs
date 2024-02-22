import express from "express";
import db from "../db/conn.mjs";
import { BSON } from "mongodb";

const router = express.Router();

// Get a single user
router.get("/:id", async (req, res) => {
  let collection = await db.collection("users");
  let oid = new BSON.ObjectId(req.params.id);
  let result = await collection.findOne({_id: oid});
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default router;