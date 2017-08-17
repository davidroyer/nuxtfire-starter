const functions = require('firebase-functions');
const Admin = require('firebase-admin');
Admin.initializeApp(functions.config().firebase);
const app = require('express')();
const cors = require('cors')
const API_Routes = require('./apiRoutes')

app.use(cors({ origin: true }))
const Posts = Admin.database().ref('/posts')

// app.get('/', (req, res) => {
//   res.send('This was sent!');
// });

app.use('/api', API_Routes)

exports.api = functions.https.onRequest(app);
