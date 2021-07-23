import express from "express";
import cors from "cors"
import routes from "./router";
 
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.get('/', (req, res) => {
  return res.json("OLA")
})

app.listen(3333);