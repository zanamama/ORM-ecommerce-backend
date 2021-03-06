const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("It's working!!!"));


app.use(routes);
//connection to db and server turned on below
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening!"));
});