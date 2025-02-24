require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const contactRoutes = require("./api/contacts/contact.route");
const companyRoutes = require("./api/company/company.route"); 
const otherInfoRoutes = require('./api/otherInfo/otherInfo.route');

app.use(express.json());
app.use(cors());

app.use("/api/contacts", contactRoutes);
app.use("/api/company", companyRoutes);
app.use('/api/otherinfo', otherInfoRoutes);

app.get('/', function (req, res) {
    res.send('Hey, I am Node.JS');
  });
  app.listen(process.env.PORT, function () {
    console.log('Example app listening on port 5000!');
  });