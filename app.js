const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const app = express();
app.use(express.json());
const users = [];
app.use(cors());
const port = process.env.PORT || 3000;
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`app is listening on localhost:${port}`);
});
