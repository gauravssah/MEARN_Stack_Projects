const Firebase = require("firebase-admin");
const serviceAccount = require("../drive-db709-firebase-adminsdk-fbsvc-084079ad39.json");


const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: ""
});