const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

// Create User
app.post("/users/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { username: req.body.username, password: hashedPassword };
    users.push(user);
    // 201 Status means "Created"
    res.status(201).send();
  } catch (err) {
    res.status(500).send();
  }
});

// Login User
app.post("/users/login", async (req, res) => {
  const user = users.find(user => user.name == req.body.name);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("success");
    } else {
      res.send("Invalid Credentials");
    }
  } catch (err) {
    res.status(500).send();
  }
});

app.listen(3000, () => console.log("Listening on Port 3000"));
