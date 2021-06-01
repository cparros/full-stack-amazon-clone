const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IunkDAkgJAyOOeUZm6wxL8JGJlgqyLiboYtaTbzd4O6it4fIQOoYjdjlj2xCveuTK6BgCK3v4mp9AE3st8IoJfN00bpnBpbH6"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Received Bang", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-challenge-cd675/us-central1/api
