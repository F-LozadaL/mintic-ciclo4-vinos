const Usuario = require("../models/usuario.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function (req, res) {
    let usuario = new Usuario({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        balanceÑ: require.body.balance
    })

    usuario.save(function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al guardar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = "El usuario se guardo correctamente"
        res.json(response)
    })
}

exports.find = function (req, res) {
    Usuario.find(function (err, usuarios) {
        res.json(usuarios)
    })
}

exports.findOne = function (req, res) {
    Empleado.findOne({ _id: req.params.id }, function (err, usuario) {
        res.json(usuario)
    })
}

