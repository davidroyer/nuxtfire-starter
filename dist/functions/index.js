const functions = require('firebase-functions');
const Admin = require('firebase-admin');
Admin.initializeApp(functions.config().firebase);
const app = require('express')();
const cors = require('cors')
const API_Routes = require('./apiRoutes')

app.use(cors({ origin: true }))
app.use('/api', API_Routes)

exports.api = functions.https.onRequest(app);
