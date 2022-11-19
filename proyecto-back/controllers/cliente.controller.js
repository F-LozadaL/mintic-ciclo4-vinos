const Cliente = require("../models/cliente.model");

let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let cliente = new Cliente({
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    address: req.body.address,
    balance: req.body.balance,
  });

  cliente.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar el cliente");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El cliente se guardo correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Cliente.find(function (err, clientes) {
    res.json(clientes);
  });
};

exports.findOne = function (req, res) {
  Cliente.findOne({ _id: req.params.id }, function (err, cliente) {
    res.json(cliente);
  });
};

//////
exports.update = function (req, res) {
  let cliente = {
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    address: req.body.address,
    balance: req.body.balance,
  };

  Cliente.findByIdAndUpdate(req.params.id, { $set: cliente }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al modificar el cliente");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El cliente se modifico correctamente");
    res.json(response);
  });
};

exports.remove = function (req, res) {
  Cliente.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar el cliente");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El cliente se ha eliminado correctamente");
    res.json(response);
  });
};
