const express = require("express");
const cors = require("cors")
const bodyParser = require('body-parser');

const main_router = require("./routers/index");
const app = express();
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
app.use("/api/v1",main_router);

app.listen(4000,function(){ console.log("Listning On Port : 4000")})