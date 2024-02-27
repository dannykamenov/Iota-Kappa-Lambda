const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongo_uri = process.env.DB_URI || 'mongodb://127.0.0.1:27017/ikl-events';
const router = require('./router/router');
const admin = require('firebase-admin');

const allowedOrigins = [
  'http://localhost:5174',
  'http://localhost:5173'
]

const serviceAccount = JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, 'base64').toString()) || null;

app.use(express.json());
app.use(cors({
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));
app.use(bodyParser.json());
mongoose.connect(`${mongo_uri}`);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
app.use('/api', router)
const port = 3000; 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});