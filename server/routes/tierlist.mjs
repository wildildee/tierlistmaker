import express from "express";
import db from "../db/conn.mjs";
import { BSON } from "mongodb";

const RESULTS_PER_PAGE = 12;

const router = express.Router();

// Fetches the latest tierlists
router.get("/latest", async (req, res) => {
  let collection = await db.collection("tierlists");
  let results = await collection.aggregate([
    {
      $addFields: {
        author_id: {$toObjectId: '$author'}
      }
    }, {
    $lookup: {
      from: 'users',
      localField: 'author_id',
      foreignField: '_id',
      as: 'author'
    }
  }, {
    $project: {
      _id: 1,
      name: 1,
      author: 1,
      back_image: 1
    }
  }, {
    $sort: {_id:1}
  },{
    $limit: RESULTS_PER_PAGE
  }
  ]).toArray(); 
  let count =  Math.ceil(await collection.countDocuments() / RESULTS_PER_PAGE);
  res.send({results: results, maxpage: count}).status(200);
});

// Fetches tierlists based on search
router.get("/search", async (req, res) => {
  let collection = await db.collection("tierlists");

  let skip = 0;
  if(req.query.page !== undefined) {
    skip = (req.query.page - 1) * RESULTS_PER_PAGE;
  }
  let filter = "";
  if(req.query.filter !== undefined) {
    filter = req.query.filter;
  }
  console.log(filter);

  let results = await collection.aggregate([
    {
      $addFields: {
        author_id: {$toObjectId: '$author'}
      }
    }, {
    $lookup: {
      from: 'users',
      localField: 'author_id',
      foreignField: '_id',
      as: 'author'
    }
  }, {
    $match: {"name": {$regex: filter, $options: "i"}}
  }, {
    $project: {
      _id: 1,
      name: 1,
      author: 1,
      back_image: 1
    }
  }, {
    $sort: {_id:1}
  },{
    $skip: skip
  },{
    $limit: RESULTS_PER_PAGE
  }
  ]).toArray();
  let count = Math.ceil(await collection.countDocuments({
    "name": {$regex: filter, $options: "i"}
  }) / RESULTS_PER_PAGE);
  res.send({results: results, maxpage: count}).status(200);
});

// Get a single tierlist
router.get("/:id", async (req, res) => {
  let collection = await db.collection("tierlists");
  let oid = new BSON.ObjectId(req.params.id);
  let result = await collection.aggregate([
    {
      $addFields: {
        author_id: {$toObjectId: '$author'}
      }
    }, {
      $lookup: {
        from: 'users',
        localField: 'author_id',
        foreignField: '_id',
        as: 'author'
      }
    }, {
      $match: {_id: oid}
    }, {
      $sort: {_id:1}
    },{
      $limit: RESULTS_PER_PAGE
    }
  ]).next();
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Get a tierlist by user
router.get("/byuser/:id", async (req, res) => {
  let collection = await db.collection("tierlists");

  let skip = 0;
  if(req.query.page !== undefined) {
    skip = (req.query.page - 1) * RESULTS_PER_PAGE;
  }

  let result = await collection.aggregate([
    {
      $match: {author: req.params.id}
    },{
      $addFields: {
        author_id: {$toObjectId: '$author'}
      }
    }, {
      $lookup: {
        from: 'users',
        localField: 'author_id',
        foreignField: '_id',
        as: 'author'
      }
    }, {
      $sort: {_id:1}
    },{
      $skip: skip
    },{
      $limit: RESULTS_PER_PAGE
    }
  ]).toArray();
  let count = Math.ceil(await collection.countDocuments({
    "author": {$regex: req.params.id}
  }) / RESULTS_PER_PAGE);
  if (!result) res.send("Not found").status(404);
  else res.send({results: result, maxpage: count}).status(200);
});

// Add a new document to the collection
// router.post("/", async (req, res) => {
//   let collection = await db.collection("posts");
//   let newDocument = req.body;
//   newDocument.date = new Date();
//   let result = await collection.insertOne(newDocument);
//   res.send(result).status(204);
// });

// Update the post with a new comment
// router.patch("/comment/:id", async (req, res) => {
//   const query = { _id: ObjectId(req.params.id) };
//   const updates = {
//     $push: { comments: req.body }
//   };
// 
//   let collection = await db.collection("posts");
//   let result = await collection.updateOne(query, updates);
// 
//   res.send(result).status(200);
// });

// Delete an entry
// router.delete("/:id", async (req, res) => {
//   const query = { _id: ObjectId(req.params.id) };
// 
//   const collection = db.collection("posts");
//   let result = await collection.deleteOne(query);
// 
//   res.send(result).status(200);
// });

export default router;