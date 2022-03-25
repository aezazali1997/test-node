const jwt = require("jsonwebtoken");
const users = require("../users");
const passwordValidation = require("../utils/passwordRegex");
const validateEmail = require("../utils/emailValidation");
const authkey = require("../constants/authConstants");
let tmp = [];
module.exports = {
  login: (req, res, next) => {
  
    const db_name = "aezaz";
    const db_email = "aezazali.pro@gmail.com";
    const db_pass = "1234";
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send({
        error: true,
        message: "email or password required",
        data: [],
      });
    }
    const match_user = users.data.find((user) => user.email === email);
    const match_pass = users.data.find((user) => user.password === password);

    if (!match_user) {
      res.status(401).send({
        error: true,
        message: "Invalid credentials",
        data: {},
      });
    }
    if (!match_pass) {
      res.status(401).send({
        error: true,
        message: "Invalid credentials",
        data: {},
      });
    }

    res.json({
      message: "login success",
      data: { name: db_name },
      error: false,
    });
  },
  register: (req, res, next) => {
    console.log(users.data);
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).send({
        error: true,
        message: "Name,Email and Password are mandatory fields",
        data: {},
      });
    }
    if (!passwordValidation(password)) {
      res.status(400).send({
        error: true,
        message:
          "Password must contain at least 6 characters, one uppercase and one lower case!",
        data: {},
      });
    }
    if (!validateEmail(email)) {
      res.status(400).send({
        error: true,
        message: "Email must be in valid format!",
        data: {},
      });
    }
    const findUser = users.data.find((user) => user.email === email);
    if (!findUser) {
      users.data.push({ name, email, password });
      res.status(201).send({
        error: false,
        message: "User succesfully regsitered",
        data: {},
      });
    } else {
      res.status(201).send({
        error: true,
        message: "Email already regsitered",
        data: {},
      });
    }
  },
};
