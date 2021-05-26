const functions = require("firebase-functions");
const express = require("express");
// //Cors is a security
const cors = require("cors");
const { getBasketTotal } = require("../src/reducer")
const stripe = require("stripe")('sk_test_51IunkDAkgJAyOOeUZm6wxL8JGJlgqyLiboYtaTbzd4O6it4fIQOoYjdjlj2xCveuTK6BgCK3v4mp9AE3st8IoJfN00bpnBpbH6')
// //API SETUP
// //App config
const app = express()

// //Middleware
app.use(cors(({origin: true})))
app.use(express.json())

// //API Routes
app.get('/', (req, res) => res.status(200).send('Hello World'))

// //Listen Command
exports.api = functions.https.onRequest(app)