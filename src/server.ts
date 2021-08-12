import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "abandon hope all ye who enter here" });
});

app.post("/courses", (req, res) => {
  const { name } = req.body;

  return res.json({ name });
});

app.listen(5000, () => console.log("app is running"));
