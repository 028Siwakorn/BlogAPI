require("dotenv").config();

const firebaseConfig = {
  apiKey: "proces.env.APIKEY",
  authDomain: "proces.env.AUTHDOMAIN",
  projectId: "proces.env.PROJECTID",
  storageBucket: "proces.env.STORAGEBUCKET",
  messagingSenderId: "proces.env.MESSAGINGSENDERID",
  appId: "proces.env.APPID",
  measurementId: "proces.env.MEASUREMENTID",
};

module.exports = firebaseConfig;
