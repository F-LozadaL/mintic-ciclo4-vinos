const Compra = require("../models/compra.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function (req, res) {
    let compra = new Compra({
        username: req.body.username,
        date: req.body.date
    })

    compra.save(function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al guardar la compra"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = "La compra se guardo correctamente"
        res.json(response)
    })
}

exports.find = function (req, res) {
    Compra.find(function (err, compras) {
        res.json(compras)
    })
}

exports.findOne = function (req, res) {
    Compra.findOne({ _id: req.params.id }, function (err, compra) {
        res.json(compra)
    })
}
//////
exports.update = function (req, res) {
    let compra = {
        username: req.body.username,
        date: req.body.date
    }

    Compra.findByIdAndUpdate(req.params.id, { $set: compra }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar la compra"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = "La compra modifico correctamente"
        res.json(response)
    })
}

exports.remove = function (req, res) {
    Compra.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar la compra"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = "La compra se ha eliminado correctamente"
        res.json(response)
    })
}

