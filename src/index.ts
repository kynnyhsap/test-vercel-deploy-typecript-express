import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.end("Hello!");
});

app.get("/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.listen(PORT, () => {
  return console.log(`Server is listening on ${PORT}`);
});

module.exports = app;
