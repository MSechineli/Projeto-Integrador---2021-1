import express from "express";
import routes from "./router";
const app = express();

app.use(express.json());
app.use(routes);
app.get('/', (req, res) => {
  return res.json("OLA")
})

app.listen(3333);