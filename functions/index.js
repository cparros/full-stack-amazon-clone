const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51IunkDAkgJAyOOeUZm6wxL8JGJlgqyLiboYtaTbzd4O6it4fIQOoYjdjlj2xCveuTK6BgCK3v4mp9AE3st8IoJfN00bpnBpbH6"
);

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello World"));

exports.api = functions.https.onRequest(app);
