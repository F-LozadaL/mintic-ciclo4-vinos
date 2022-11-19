const Usuario = require("../models/usuario.model");
let response = {
  msg: "",
  exito: false,
};

// AUTORIZACION
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.login = function (req, res, next) {
  let hashedpass = crypto
    .createHash("sha512")
    .update(req.body.password)
    .digest("hex");

  Usuario.findOne(
    { username: req.body.username, password: hashedpass },
    function (err, user) {
      let response = {
        token: null,
      };
      if (user == null) console.log(0);
      if (user !== null) {
        response.token = jwt.sign(
          {
            id: user._id,
            user: user.username,
          },
          "__recret__",
          { expiresIn: "12h" }
        );
      }
      res.json(response);
    }
  );
};
// AUTORIZACION
